import {Thumb} from './index-es.es'
const f = new Thumb();

xtag.register('x-praise', {
    content: '<div id="wrap">' +	
    '<div id="PraiseButton"></div>' +
    '<div id="Thumb"></div>' +
    '<span class="hide" id="animation">+1</span>' +
    '</div>' ,

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
        if(e.target.id == "Thumb"|| e.target.id == "PraiseButton"){
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


  