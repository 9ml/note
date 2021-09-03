"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_session_1 = __importDefault(require("cookie-session"));
require("./controller/LoginController");
var decorator_1 = require("./controller/decorator");
// import router from './router'
/**
 * 问题
 * 1. express 库的类型定义文件 .d.ts 文件类型描述不准确
 * 2. 当使用中间件时，对 req 或者 res 做了修改之后，实际上的类型并不能改变。
 */
var app = (0, express_1.default)();
// bodyParser 必须卸载 router 路由的前面
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use((0, cookie_session_1.default)({
    name: 'session',
    keys: ['9ml'],
    maxAge: 24 * 60 * 60 * 1000 //  24hours
}));
app.use(function (req, res, next) {
    req.name = 'Tom';
    next();
});
app.use(decorator_1.router);
app.listen(3000, function () {
    console.log('Server is running.');
});
