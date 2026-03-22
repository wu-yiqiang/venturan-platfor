import Axios from 'axios';
import { showFailToast } from 'vant';
import { ContentTypeEnum } from '@/enums/request-enum';
import NProgress from '../progress';
import 'vant/es/toast/style';
import { useSysStore } from '@/store/modules/sysStore';
import router from '@/router';
const configDefault = {
    headers: {
        'Content-Type': ContentTypeEnum.JSON,
    },
    timeout: 60 * 60 * 3,
    baseURL: import.meta.env.VITE_API_BASE_URL,
    data: {},
};
// HTTP 状态码 → 错误消息映射
const HTTP_ERROR_MAP = {
    400: '请求错误',
    401: '未授权，请登录',
    403: '拒绝访问',
    404: '请求地址出错',
    408: '请求超时',
    500: '服务器内部错误',
    501: '服务未实现',
    502: '网关错误',
    503: '服务不可用',
    504: '网关超时',
    505: 'HTTP版本不受支持',
};
const axiosInstance = Axios.create(configDefault);
// 请求拦截
axiosInstance.interceptors.request.use((config) => {
    NProgress.start();
    const sysStore = useSysStore();
    const token = sysStore?.userInfos?.token;
    if (token) {
        config.headers['Authorization'] = token;
    }
    return config;
}, (error) => {
    showFailToast(error.message);
    return Promise.reject(error);
});
// 响应拦截
axiosInstance.interceptors.response.use((response) => {
    NProgress.done();
    const status = response?.status;
    const { data, code, msg } = response.data;
    if (status == 200) {
        if (code == 200)
            return data;
        showFailToast(msg);
        if (code === 1010002) {
            router.push({ name: "Login" });
        }
        return Promise.reject(response.data);
    }
    else {
        return Promise.reject(response.data);
    }
}, (error) => {
    NProgress.done();
    if (Axios.isCancel(error)) {
        return Promise.reject(error);
    }
    // 处理 HTTP 网络错误
    const status = error.response?.status;
    const message = (status && HTTP_ERROR_MAP[status]) || '网络连接故障';
    showFailToast(message);
    return Promise.reject(error);
});
export const http = {
    get(url, config) {
        return axiosInstance.get(url, config);
    },
    post(url, data, config) {
        return axiosInstance.post(url, data, config);
    },
    put(url, data, config) {
        return axiosInstance.put(url, data, config);
    },
    delete(url, config) {
        return axiosInstance.delete(url, config);
    },
    request(config) {
        return axiosInstance.request(config);
    },
    /**
     * 可取消的请求 — 适用于页面切换时取消未完成的请求
     * @example
     * const { promise, cancel } = http.requestWithCancel({ url: '/api/data' })
     * onBeforeUnmount(() => cancel())
     * const data = await promise
     */
    requestWithCancel(config) {
        const controller = new AbortController();
        const finalConfig = {
            ...config,
            signal: controller.signal,
        };
        return {
            promise: axiosInstance.request(finalConfig),
            cancel: () => controller.abort(),
        };
    },
};
