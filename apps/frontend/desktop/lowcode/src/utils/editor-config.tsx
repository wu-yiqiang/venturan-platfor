import { ElButton, ElInput, ElSelect } from 'element-plus'
import { Tickets } from '@element-plus/icons-vue/global'
import  { ComponentTypeEnum } from '../common/const'

export const basicComponents = [
  {
    label: '文本',
    icon: () => (
      <el-icon size="20">
        <Tickets />
      </el-icon>
    ),
    preview: () => '预览文本',
    render: () => '渲染文本',
    key: ComponentTypeEnum.TEXT,
    attributes: {}
  },
  {
    label: '按钮',
    icon: () => (
      <el-icon size="20">
        <Tickets />
      </el-icon>
    ),
    preview: () => <ElButton>预览按钮</ElButton>,
    render: () => <ElButton>渲染按钮</ElButton>,
    key: ComponentTypeEnum.BUTTON,
    attributes: {}
  },
  {
    label: '输入框',
    icon: () => (
      <el-icon size="20">
        <Tickets />
      </el-icon>
    ),
    preview: () => <ElInput placeholder="预览输入框" />,
    render: (props: any) => <ElInput {...props} style={{ width: props?.width + 'px', height: props?.height + 'px' }} v-model={props.value} />,
    key: ComponentTypeEnum.INPUT,
    attributes: {
      text: '输入框',
      value: '',
      placeholder: '请输入',
      width: 240,
      height: 32
    }
  },
  {
    label: '选择器',
    icon: () => (
      <el-icon size="20">
        <Tickets />
      </el-icon>
    ),
    preview: () => <ElSelect placeholder="预览选择器" />,
    render: () => <ElSelect placeholder="渲染选择器" />,
    key: ComponentTypeEnum.SELECT,
    attributes: {}
  }
]