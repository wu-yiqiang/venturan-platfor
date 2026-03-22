import { useTitle } from '@vueuse/core';
import { pageDefaultTitle } from '@/settings';
export default function setPageTitle(routerTitle) {
    const pageTitle = routerTitle ? `${routerTitle}` : pageDefaultTitle;
    useTitle(pageTitle);
}
