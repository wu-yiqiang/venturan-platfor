<template>
  <div class="Avatar">
    <div class="topbar">
      <van-icon name="cross" size="26" @click="handleback" />
      <van-icon name="success" size="26" @click="handleUpload" />
    </div>
    <div class="main-container">
      <vue-cropper :autoCrop="true" :canMove="false" ref="cropper" :img="currentImg" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { avatarUrl } from '@/utils/index'
import 'vue-cropper/dist/index.css'
import { VueCropper } from "vue-cropper";
import { useRouter } from 'vue-router';
import { useSysStore } from '@/store/modules/sysStore'
import { userUpdate } from '@/api/user';
import { upload } from '@/api/public';
const sysStore = useSysStore()
const router = useRouter();
const route = useRoute()
const cropper = ref()
const nickName = ref(route?.query?.nick_name)
const currentImg = ref(avatarUrl(route?.query?.image))
const handleback = () => {
  router.back()
}
const base64toFile = (base64Str, fileName) => {
  let arr = base64Str.split(',');
  console.log(arr[0])
  let mime = arr[0].match(/:(.*?);/)[1];
  let bstr = atob(arr[1]);
  let n = bstr.length;
  let u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], fileName, { type: mime })
}
const handleUpload = async () => {
  cropper.value.getCropData(async (data: any) => {
    const imageUrl = await upload(base64toFile(data, 'avatar'))
    console.log('heng1', imageUrl)
    await userUpdate({ nick_name: nickName.value, avatar: imageUrl })
    sysStore.setUserInfos({...sysStore.userInfos, avatar: imageUrl})
    handleback()
  })
  
}
const handleEditAvatar = () => {
  router.push({ name: 'Avatar' });
}
nextTick(() => {
  console.log(route?.query.nickName)
})
</script>

<style lang="scss" scoped>
.Avatar {
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
    padding: 10px 12px;
    background-color: rgb(240, 240, 240);
  }

  .main-container {
    flex: 1;
  }

}
</style>