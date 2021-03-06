"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var decorator_1 = require("./decorator");
var util_1 = require("../utils/util");
var LoginController = /** @class */ (function () {
    function LoginController() {
    }
    LoginController.prototype.post = function (req, res) {
        var password = req.body.password;
        var isLogin = req.session ? req.session.login : undefined;
        if (isLogin) {
            res.json((0, util_1.getResponse)(null, '已经登录'));
        }
        else {
            if (password === '123') {
                if (req.session) {
                    req.session.login = true;
                    return res.json((0, util_1.getResponse)(true));
                }
                return res.json((0, util_1.getResponse)(false, '登录过期'));
            }
            res.json((0, util_1.getResponse)(false, '登录失败'));
        }
    };
    LoginController.prototype.logout = function (req, res) {
        if (req.session) {
            req.session.login = undefined;
            res.json((0, util_1.getResponse)(true));
        }
    };
    LoginController.prototype.home = function (req, res) {
        var isLogin = req.session ? req.session.login : undefined;
        if (isLogin) {
            return res.send("\n        <html>\n          <body>\n            <a href=\"/data\">\u722C\u53D6\u5185\u5BB9</a>\n            <a href=\"/logout\">\u9000\u51FA\u767B\u5F55</a>\n          </body>\n        </html>\n      ");
        }
        res.send("\n    <html>\n      <body>\n        <form method=\"POST\", action=\"/login\">\n          <input type=\"password\" name=\"password\" />\n          <button>\u767B\u5F55</button>\n        </form>\n      </body>\n    </html>\n    ");
    };
    __decorate([
        (0, decorator_1.post)('/login'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "post", null);
    __decorate([
        (0, decorator_1.get)('/logout'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "logout", null);
    __decorate([
        (0, decorator_1.get)('/'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "home", null);
    LoginController = __decorate([
        decorator_1.controller
    ], LoginController);
    return LoginController;
}());
