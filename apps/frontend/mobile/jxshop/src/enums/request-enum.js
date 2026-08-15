/**
 * @description: ContentType
 */
export var ContentTypeEnum;
(function (ContentTypeEnum) {
    // form-data qs
    ContentTypeEnum["FORM_URLENCODED"] = "application/x-www-form-urlencoded;charset=UTF-8";
    // form-data upload
    ContentTypeEnum["FORM_DATA"] = "multipart/form-data;charset=UTF-8";
    // json
    ContentTypeEnum["JSON"] = "application/json;charset=UTF-8";
})(ContentTypeEnum || (ContentTypeEnum = {}));
/**
 * @description: 与后端协定的状态 code
 */
export var ResultEnum;
(function (ResultEnum) {
    ResultEnum[ResultEnum["SUCCESS"] = 0] = "SUCCESS";
    ResultEnum[ResultEnum["ERROR"] = 1] = "ERROR";
})(ResultEnum || (ResultEnum = {}));
