export const useSysStore = defineStore('JXSHOPSTORE', () => {
  const userInfos = ref({
    sd: "121"
  })
  const setUserInfos = (value: any) => {
    userInfos.value = value
  }

  return {
    setUserInfos
  }
}, {
  persist: true
})
