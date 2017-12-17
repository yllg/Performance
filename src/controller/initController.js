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
            }), _.get('/index/index', _indexController2.default.index()), _.get('/index/update', _indexController2.default.update());
        }));
    }
}; //注册路由
exports.default = controllerInit;
