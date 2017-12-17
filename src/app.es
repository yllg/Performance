import Koa from 'koa';
//引入路由，自己写的控制器
import router from 'koa-simple-router';
import initController from './controller/initController';
//引入swig模板
import render from 'koa-swig';
import co from 'co';
//引入静态资源配置
import serve from 'koa-static';
//引入babel的另两个文件
import babel_co from 'babel-core/register';
import babel_po from 'babel-polyfill';
//引入配置文件
import CONFIG from './config/config';

const app = new Koa();

//初始化路由设置
initController.init(app,router);

//模板引擎设置
app.context.render = co.wrap(render({
    root:CONFIG.get('viewDir'),
    autoescape: true,
    cache: 'memory', // disable, set to false 
    ext: 'html', 
    writeBody: false
}));

//静态资源设置
app.use(serve(CONFIG.get('staticDir')));

//路由容错处理
// 404，跳到腾讯公益页面
app.use(async (ctx) => {
    ctx.status = 404
    ctx.body = await ctx.render('404.html');
    // ctx.redirect("http://www.yidengxuetang.com/");
});
// 500，跳到一等学堂
app.on('error', (err, ctx) => {
    // ctx.body = "😓 服务器开了小差......";
    ctx.redirect("http://www.yidengxuetang.com/");
});

app.listen(CONFIG.get('port'));
export default app