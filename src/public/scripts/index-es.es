
//只留下父类发送请求的方法，子类，点击事件，稀释事件全都放到tags组件中

import css from "../css/index.css"

class PraiseButton {
	constructor(){

	}
	clickAction(){
		axios.get('/index/update')
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	}
}

//Thumb和star都继承PraiseButton
class Thumb extends PraiseButton{
	constructor(){
		super();
	}
}
class Star extends PraiseButton{
	constructor(){
		super();
	}
}
export {Thumb,Star}






