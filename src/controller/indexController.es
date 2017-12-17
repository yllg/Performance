//引入model层的方法
import indexModel from '../models/indexmodel'
//路由的方法
const indexController = {
    index(){
        return async(ctx,next)=>{
            ctx.body = await ctx.render('index.html',{
                title: '首页'
            });
        }
    },
    update(){
        return async(ctx,next)=>{
            const indexM = new indexModel(ctx);
            ctx.body = await indexM.updateNum();
        }
    },
    star(){
        return async(ctx,next)=>{
            if(ctx.request.header['x-pjax']){
                ctx.body = "<x-star></x-star>";
            }else{
                ctx.body = await ctx.render('star.html',{
                title: '星星组件页'
                });
            }
        }
    },
    praise(){
        return async(ctx,next)=>{
            if(ctx.request.header['x-pjax']){
                ctx.body = "<x-praise></x-praise>";
            }else{
                ctx.body = await ctx.render('index.html',{
                title: '首页'
                });
            }
        }
    },
    advertisement(){
        return async(ctx, next) => {
            ctx.body = '<div style="height:150px; background:orange;">...大幅广告...</div>'
        }
    }
}
export default indexController