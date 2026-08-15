export const useSysStore = defineStore('JXSHOPSTORE', () => {
    const userInfos = ref({});
    const bottomTab = ref(false);
    const ShopStatus = ref([]);
    const setUserInfos = (value) => {
        userInfos.value = value;
    };
    const setShopStatus = (value) => {
        ShopStatus.value = value;
    };
    const setBottomTab = (value) => {
        bottomTab.value = value;
    };
    return {
        setUserInfos,
        userInfos,
        ShopStatus,
        setShopStatus,
        bottomTab,
        setBottomTab
    };
}, {
    persist: true
});
