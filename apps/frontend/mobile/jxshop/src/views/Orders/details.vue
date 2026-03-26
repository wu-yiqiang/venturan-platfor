<template>
    <div class="User">
        <div class="topbar">
            <div class="title"><van-nav-bar title="订单详情" /></div>
        </div>
        <div class="user-info">
            <div class="info-container">
                <div class="image">
                    <van-image round width="80px" height="80px" :src="avatarUrl(sysStore.userInfos?.avatar)" />
                </div>
                <div class="top-container">sdsd1sdsd1</div>
                <div class="bottom-container">
                    <div class="unpay">
                        <div class="payCount">需付款：￥<span class="count">98</span></div>
                        <div class="payTime">剩余支付时间&nbsp<div class="time">02</div>&nbsp<strong>:</strong>&nbsp<div
                                class="time">13</div>
                        </div>
                        <van-button round block type="success" @click="handlePay">
                            为好友买单
                        </van-button>
                    </div>
                    <div class="paysuccess">
                        <div class="contents">
                            <div class="title">支付成功</div>
                            <div class="tips">如发生退款，则原路返回</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="orders">
                <div v-for="(order, index) in [1, 2, 3, 4, 6]" :key="index" class="order">
                    <div class="title">话满分SaaS阿萨大萨答萨答阿</div>
                    <div class="content-container">
                        <div class="image">
                            <van-image width="50px" height="50px" :src="avatarUrl(sysStore.userInfos?.avatar)" />
                        </div>
                        <div class="title">
                            <div class="name">阿三大苏打啊实打实打算啊飒飒大大阿三大苏打阿萨大</div>
                            <div class="count">× 1</div>
                        </div>
                        <div class="price">￥98</div>
                    </div>
                </div>
            </div>
            <div class="tips">
                <div class="title">代付说明</div>
                <ol>
                    <li>1、付款前请先与好友确认无误，避免受骗。</li>
                    <li>2、付款成功后，如需申请退款，可以联系好友申请退款。</li>
                    <li>3、当代付订单退款成功后，实付金额将原路退还代付人。</li>
                </ol>
            </div>
        </div>
    </div>
    <input id="image-code" accept="image/*" style="display: none" type="file" />
</template>

<script setup lang="ts">
import { avatarUrl } from '@/utils/index'
import { useRouter } from 'vue-router';
import { useSysStore } from '@/store/modules/sysStore'
import { cloneDeep } from 'lodash-es'
const sysStore = useSysStore()
const router = useRouter();
const formStates = ref({})

const handlePay = () => {

}
onMounted(() => {
    nextTick(() => {
        formStates.value = cloneDeep(sysStore.userInfos)
    })
})
</script>

<style lang="scss" scoped>
$--image-width: 40px;

.User {
    height: 100dvh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;

    .topbar {
        position: sticky;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 12px;
        width: 100%;
        background-color: #fff;

        .title {
            flex: 1;
        }

        .left,
        .right {
            width: 30px;
        }
    }

    .user-info {
        flex: 1;
        padding: 12px;
        background-color: rgb(240, 239, 239);
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 40px;
        overflow: auto;

        .info-container {
            background-color: #fff;
            width: 100%;
            border-radius: 4px;
            position: relative;
            margin-bottom: 10px;

            .image {
                margin-bottom: 30px;
                position: absolute;
                top: -30px;
                right: calc(50% - $--image-width);
            }

            .top-container {
                background-color: rgb(242, 211, 113);
                padding-top: $--image-width + 16px;
                padding-bottom: 10px;
                border-radius: 4px 4px 0 0;
                display: grid;
                place-items: center;
                font-weight: 600;
                font-size: 14px;
            }

            .bottom-container {
                padding: 14px;

                .unpay {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    row-gap: 10px;

                    .payCount {
                        font-weight: 600;
                        font-size: 14px;

                        .count {
                            font-size: 26px;
                        }
                    }

                    .payTime {
                        font-size: 13px;
                        display: flex;
                        align-items: center;

                        .time {
                            background-color: #000;
                            color: #fff;
                            padding: 0px 2px;
                            display: grid;
                            place-items: center;
                            border-radius: 2px;
                            font-size: 12px;
                        }
                    }
                }

                .paysuccess {
                    display: grid;
                    place-items: center;

                    .contents {

                        .title {
                            font-weight: 600;
                            font-size: 14px;
                            color: #030303;
                            display: grid;
                            place-items: center;
                        }

                        .tips {
                            font-weight: 500;
                            font-size: 13px;
                            color: #c7c6c6;
                            display: grid;
                            place-items: center;
                        }
                    }

                }
            }

        }

        .orders {
            display: grid;
            row-gap: 10px;
            width: 100%;

            .order {
                padding: 14px;
                border-radius: 4px;
                background-color: #fff;
                width: 100%;

                .title {
                    font-size: 14px;
                    font-weight: 600;
                }

                .content-container {
                    display: flex;
                    justify-content: space-between;
                    column-gap: 8px;

                    .title {
                        flex: 1;
                        font-size: 14px;
                        font-weight: 400;

                        .count {
                            color: #d1d1d1;
                        }
                    }

                    .price {
                        font-size: 14px;
                        font-weight: 500;
                    }
                }
            }
        }

        .tips {
            margin-top: 10px;

            .title {
                font-weight: 600;
                font-size: 16px;
            }
            li{
              font-size: 13px;
            }
        }
    }

}
</style>