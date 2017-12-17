
import rpA from 'request-promise'
class indexModel{
    constructor(ctx){
        this.ctx = ctx;
    }
    //model层调用php的接口
    updateNum(){
        const options = {
            uri: 'http://localhost:8080/praise.php',
            method:'GET'
        }
        return new Promise((resolve,reject)=>{
            rpA(options).then(function(result){
                const info = JSON.parse(result);
                if(info){
                    resolve({data:info.result});
                }else{
                    reject({});
                }
            })
        })
    }
}
//导出给indexController里
export default indexModel