"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResponse = void 0;
var getResponse = function (data, errMsg) {
    if (errMsg) {
        return {
            success: false,
            errMsg: errMsg,
            data: data
        };
    }
    return {
        success: true,
        data: data
    };
};
exports.getResponse = getResponse;
