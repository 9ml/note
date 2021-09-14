"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 分析器
 */
var fs_1 = __importDefault(require("fs"));
var cheerio_1 = __importDefault(require("cheerio"));
var Analyzer = /** @class */ (function () {
    // 单例模式
    function Analyzer() {
    }
    Analyzer.getInstance = function () {
        if (!Analyzer.instance) {
            Analyzer.instance = new Analyzer();
        }
        return Analyzer.instance;
    };
    Analyzer.prototype.analyze = function (html, filePath) {
        var result = this.getInfo(html);
        var data = this.getData(result, filePath);
        return JSON.stringify(data);
    };
    Analyzer.prototype.getInfo = function (html) {
        var $ = cheerio_1.default.load(html);
        var cItems = $('.course-item');
        var list = [];
        cItems.map(function (index, item) {
            var desc = $(item).find('.course-desc');
            var title = desc.eq(0).text();
            list.push({
                title: title
            });
        });
        return list;
    };
    Analyzer.prototype.getData = function (res, filePath) {
        var data = {};
        if (fs_1.default.existsSync(filePath)) {
            data = JSON.parse(fs_1.default.readFileSync(filePath, 'utf-8'));
        }
        data[new Date().getTime()] = res;
        return data;
    };
    return Analyzer;
}());
exports.default = Analyzer;
