'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _indexController = require('./indexController');

var _indexController2 = _interopRequireDefault(_indexController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var controllerInit = {
    init: function init(app, router) {
        app.use(router(function (_) {
            //使用indexController里面的index方法
            _.get('/', function (ctx, next) {
                ctx.redirect('/index/index');
            }), _.get('/index', function (ctx, next) {
                ctx.redirect('/index/index');
            }), _.get('/index/index', _indexController2.default.index()), _.get('/index/update', _indexController2.default.update()), _.get('/index/star', _indexController2.default.star()), _.get('/index/praise', _indexController2.default.praise()), _.get('/index/adv', _indexController2.default.advertisement());
        }));
    }
}; //注册路由
exports.default = controllerInit;