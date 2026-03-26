<template>
    <div class="User">
        <div class="topbar">
            <div class="left">
                <van-icon name="arrow-left" @click="handleback" />
            </div>
            <div class="title"><van-nav-bar title="用户信息" /></div>
            <div class="right">

            </div>
        </div>
        <div class="user-info">
            <div class="image" @click="handleEditAvatar">
                <van-image round width="120px" height="120px" :src="avatarUrl(sysStore.userInfos?.avatar)" />
            </div>
            <van-form @submit="onSubmit">
                <van-cell-group inset>
                    <van-field readonly v-model="formStates.mobile" name="password" label="号码"
                        placeholder="号码" :rules="[{ required: true, message: '请填写密码' }]" />
                    <van-field v-model="formStates.nick_name" name="username" label="昵称" placeholder="昵称"
                        :rules="[{ required: true, message: '请填写昵称' }]" />

                </van-cell-group>
                <div style="margin: 16px;">
                    <van-button round block type="primary" native-type="submit">
                        提交修改
                    </van-button>
                </div>
            </van-form>
        </div>
    </div>
    <input id="image-code" accept="image/*" style="display: none" type="file" />
</template>

<script setup lang="ts">
import { Form, Field, CellGroup, showSuccessToast } from 'vant';
import { avatarUrl } from '@/utils/index'
import { useRouter } from 'vue-router';
import { useSysStore } from '@/store/modules/sysStore'
import { upload } from '@/api/public';
import { cloneDeep } from 'lodash-es'
import { userUpdate } from '@/api/user';
const sysStore = useSysStore()
const router = useRouter();
const formStates = ref({})
const handleback = () => {
    router.back()
}
const handleEditAvatar = () => {
    const f: any = document.getElementById("image-code");
    f?.click();
    f.onchange = async function (e: any) {
        const file = e.target.files[0];
        const imageUrl = await upload(file)
        try {
            router.push({
                name: 'Avatar',
                query: {
                    image: imageUrl,
                    nick_name: formStates.value.nick_name
                }
            });
        } catch (error) {
        } finally {
        }
    };
}
const onSubmit = async () => {
    await userUpdate({ nick_name: formStates.value.nick_name, avatar: formStates.value.avatar })
    sysStore.setUserInfos({...sysStore.userInfos, nick_name: formStates.value.nick_name})
    showSuccessToast("修改成功")
    handleback()
}
onMounted(() => {
    nextTick(() => {
        formStates.value = cloneDeep(sysStore.userInfos)
    })
})
</script>

<style lang="scss" scoped>
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

        .image {
            margin-bottom: 30px;
        }
        .van-form {
            width: 100%;
            background-color: #fff;
            border-radius: 4px;
            padding-top: 10px;
        }
    }

}
</style>