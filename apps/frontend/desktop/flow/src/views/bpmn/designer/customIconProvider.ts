import { is } from 'bpmn-js/lib/util/ModelUtil';

export default {
    __init__: ['customIconProvider'],
    customIconProvider: ['type', CustomIconProvider]
};

function CustomIconProvider() { }

CustomIconProvider.$inject = ['eventBus'];

CustomIconProvider.prototype.getIcon = function (element: any) {
    if (is(element, 'bpmn:StartEvent')) {
        return `
      <svg width="36" height="36" viewBox="0 0 36 36">
        <circle cx="18" cy="18" r="14" fill="#52B415" stroke="#000" stroke-width="2"/>
        <text x="18" y="23" text-anchor="middle" fill="white" font-size="12">🚀</text>
      </svg>`;
    }

    if (is(element, 'bpmn:UserTask')) {
        return `
      <svg width="36" height="36" viewBox="0 0 36 36">
        <rect x="4" y="8" width="28" height="20" rx="3" fill="#F1C40F" stroke="#000"/>
        <text x="18" y="22" text-anchor="middle" fill="black" font-size="14">👤</text>
      </svg>`;
    }
    console.log("到这里的")
    return null;
};