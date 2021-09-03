"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var express_1 = require("express");
var crowller_1 = __importDefault(require("./utils/crowller"));
var analyzer_1 = __importDefault(require("./utils/analyzer"));
var util_1 = require("./utils/util");
var checkLogin = function (req, res, next) {
    var isLogin = req.session ? req.session.login : undefined;
    if (isLogin) {
        return next();
    }
    res.json((0, util_1.getResponse)(null, '请先登录'));
};
var router = (0, express_1.Router)();
router.get('/', function (req, res) {
    var isLogin = req.session ? req.session.login : undefined;
    if (isLogin) {
        return res.send("\n      <html>\n        <body>\n          <a href=\"/data\">\u722C\u53D6\u5185\u5BB9</a>\n          <a href=\"/logout\">\u9000\u51FA\u767B\u5F55</a>\n        </body>\n      </html>\n    ");
    }
    res.send("\n  <html>\n    <body>\n      <form method=\"POST\", action=\"/login\">\n        <input type=\"password\" name=\"password\" />\n        <button>\u767B\u5F55</button>\n      </form>\n    </body>\n  </html>\n  ");
});
router.post('/login', function (req, res) {
    var password = req.body.password;
    var isLogin = req.session ? req.session.login : undefined;
    if (isLogin) {
        // res.send('已经登录')
        res.json((0, util_1.getResponse)(null, '已经登录'));
    }
    else {
        if (password === '123') {
            if (req.session) {
                req.session.login = true;
                return res.json((0, util_1.getResponse)(true));
                // return res.send('登录成功')
            }
            return res.json((0, util_1.getResponse)(false, '登录过期'));
        }
        res.json((0, util_1.getResponse)(false, '登录失败'));
        // res.send('登录失败')
    }
});
router.get('/data', checkLogin, function (req, res) {
    var url = 'http://www.dell-lee.com/';
    var analyzer = analyzer_1.default.getInstance();
    new crowller_1.default(url, analyzer);
    res.json((0, util_1.getResponse)(true));
    // res.send('Success')
});
router.get('/show', checkLogin, function (req, res) {
    try {
        var result = fs_1.default.readFileSync(path_1.default.resolve(__dirname, '../data/data.json'), 'utf-8');
        res.json((0, util_1.getResponse)(JSON.parse(result)));
        // res.send(result)
    }
    catch (error) {
        res.json((0, util_1.getResponse)(false, '数据不存在'));
        // res.send('尚未爬取内容')
    }
});
router.get('/logout', function (req, res) {
    if (req.session) {
        req.session.login = undefined;
        // res.redirect('/')
        res.json((0, util_1.getResponse)(true));
    }
});
exports.default = router;
