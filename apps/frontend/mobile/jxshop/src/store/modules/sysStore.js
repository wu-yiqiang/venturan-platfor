export const useSysStore = defineStore('JXSHOPSTORE', () => {
    const userInfos = ref({});
    const ShopStatus = ref([]);
    const setUserInfos = (value) => {
        userInfos.value = value;
    };
    const setShopStatus = (value) => {
        ShopStatus.value = value;
    };
    return {
        setUserInfos,
        userInfos,
        ShopStatus,
        setShopStatus,
    };
}, {
    persist: true
});
