import type { AxiosRequestConfig } from 'axios';
import 'vant/es/toast/style';
export declare const http: {
    get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
    post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
    put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
    delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
    request<T = any>(config: AxiosRequestConfig): Promise<T>;
    /**
     * 可取消的请求 — 适用于页面切换时取消未完成的请求
     * @example
     * const { promise, cancel } = http.requestWithCancel({ url: '/api/data' })
     * onBeforeUnmount(() => cancel())
     * const data = await promise
     */
    requestWithCancel<T = any>(config: AxiosRequestConfig): {
        promise: Promise<T>;
        cancel: () => void;
    };
};
//# sourceMappingURL=index.d.ts.map