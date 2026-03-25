import Tabular from '@/components/Tabular.tsx'
import { useState } from 'react'
import { MaintainSearch } from '@/types/maintain'
import { getOrderPages } from '@/api/commodity'
import Img from '@/components/Img'
export default function OrderLists() {
  const [lists, setLists] = useState()
  const [total, setTotal] = useState(0)
  const [queryData, setQueryData] = useState<MaintainSearch>({
    search: '',
    pageNo: 1,
    pageSize: 10
  })
  const columns = [
    {
      title: '订单号',
      dataIndex: 'serialNumber',
      key: 'serialNumber',
      width: '200px',
    },
    {
      title: '用户名',
      dataIndex: 'nick_name',
      key: 'nick_name',
      width: '200px',
      render: (value: number | string, record: any, index: number) => {
        return <>{record?.User?.nick_name}</>
      }
    },
    {
      title: '订单详情',
      dataIndex: 'details',
      key: 'details',
      align: 'center',
      render: (value: number | string, record: any, index: number) => {
        return (
          <div style={{ display: "grid", rowGap: '10px' }}>
            {record?.OrderItems?.map((item: any) => {
              return <div style={{ display: "flex", columnGap: '10px', alignItems: 'center' }}>
                <Img fileName={item?.Commodity?.fileName} />
                <div className="name">{item?.Commodity?.name}</div>
                <div className="unitPrice" style={{ color: 'red' }}>单价: ¥ {
                  new Intl.NumberFormat('zh-CN', {
                    currency: 'CNY',
                    useGrouping: false,
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }).format(item?.unit_price / 100)
                }</div>
                <div className="count" style={{ color: 'red' }}>数量: {item?.Quantity}</div>
                <div className="amount" style={{ color: 'red' }}>价格: ¥ {
                  new Intl.NumberFormat('zh-CN', {
                    currency: 'CNY',
                    useGrouping: false,
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }).format(item?.total_price / 100)
                }</div>
              </div>
            })}
          </div>
        )
      }
    },
    {
      title: '支付金额',
      dataIndex: 'amount',
      key: 'amount',
      width: '150px',
      align: 'right',
      render: (value: number | string, record: any, index: number) => {
        return (
          <div style={{ color: 'red', fontSize: '14px', fontWeight: 500 }}>¥ {
            new Intl.NumberFormat('zh-CN', {
              currency: 'CNY',
              useGrouping: false,
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(record?.amount / 100)
          }</div>
        )
      }
    }
  ]
  const searchOptions = [{ name: 'search', label: '搜索', type: 'input' }]
  const handleSearch = async (values: MaintainSearch) => {
    const { data } = await getOrderPages(values)
    setLists(data?.data)
    const datas = {
      pageSize: data?.pageSize,
      pageNo: data?.pageNo
    }
    setTotal(data?.total)
    setQueryData({ ...queryData, ...datas })
  }

  return (
    <>
      <Tabular
        dataSource={lists}
        total={total}
        pageNo={queryData.pageNo}
        pageSize={queryData.pageSize}
        columns={columns}
        data={queryData}
        searchOptions={searchOptions}
        handleSearch={handleSearch}
      ></Tabular>
    </>
  )
}
