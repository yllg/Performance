import {Star} from './index-es.es'
const f = new Star();

xtag.register('x-star', {
    content: '<div class="star" id="star">' +	
    '<div class="star1"></div>' +
    '</div>' +
    '<span class="hide" id="animation">+1</span>' ,

    methods: {
      praise: function(){
        let _this = this;
        f.clickAction();
        let animation = _this.querySelector("#animation");
        animation.className = "hide num";
        setTimeout(function(){
          animation.className = "hide";
        },800)
      }
    },
    events: {
      click: function(e){
        let _this = this;
        if(e.target.id == "star"){
          let t ="";
          if(t){
            clearTimeout(t);
          }
          t = setTimeout(function(){
            _this.praise();
          },500)
        }
      }
    }
  });


  