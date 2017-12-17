'use strict';

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var _appO = require('../app-o');

var _appO2 = _interopRequireDefault(_appO);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//获得监听的端口
function request() {
    return (0, _supertest2.default)(_appO2.default.listen());
}

//进行测试哦
describe('测试路由', function () {
    it('点赞', function (done) {
        request().get('/index/update').expect(200).end(function (err, res) {
            if (res.data == 1) return done(err);
            done();
        });
    });
});
