<template>
    <div class="AI">
        <div class="topbar">
            <van-icon name="arrow-left" @click="handleback" />
            <div class="title"><van-nav-bar title="AI助手" /></div>
            <van-nav-bar />
        </div>
        <div class="main-container">
          <chatbox v-for="(item ,index) in 100" :key="index" content="leixsdsdsd" />
        </div>
        <div class="input-container">
          <input type="text" />
          <van-button type="primary">发送</van-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Button } from 'vant';
import chatbox from './chatbox.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const avatar = (fileName: string) => {
    if (!fileName) return ''
    return import.meta.env.VITE_STORAGE_BASE_URL + fileName
}
const handleback = () => {
    router.back()
}
</script>

<style lang="scss" scoped>
.AI {
    height: 100dvh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
    overflow: hidden;
    .topbar {
        position: sticky;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 12px;
        .title {
            flex: 1;
        }
    }
    .main-container{
      flex: 1;
      padding: 14px;
      overflow: auto;
      display: grid;
      row-gap: 10px;
      content-visibility: auto;
    }
    .input-container {
      padding: 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      column-gap: 10px;
      input {
        border: 1px solid grey;
        flex: 1;
        border-radius: 4px;
        padding: 8px;
      }
    }
}
</style>