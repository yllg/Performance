module.exports = function (templateParams) {
    var _cssList = ['vendor'];
    var webAssetsHelp = require('./webAssetsHelp.js')(templateParams, _cssList);

    var _html = "{% extends './layout.html' %}" +
        "{% block title %}KOA2{{title}}{% endblock %}" +
        "{% block styles %}" +
        webAssetsHelp.styles +
        "{% endblock %}" +
        "{% block content %}{% include '../widget/index.html' %}{% endblock %}" +
        "{% block script %}" +
        "<script>" +
        "(()=>{ var flag=false;" +
        "var scriptsShow=[" + webAssetsHelp.scriptsShow + "];" +
        "for(let i=0;i<scriptsShow.length;i++){" +
        "let a=scriptsShow[i];" +
        "if(localStorage.getItem(a)){" +
        "$('<scr'+'ipt>' +localStorage.getItem(a)+'</scr'+'ipt>').attr({type:'text/javascript',id:i}).appendTo($('head').remove('#'+i));" +
        "}" + //end of if
        "else{" +
        "localStorage.clear();flag=true;" + 
        "for(let q=0; q<scriptsShow.length; q++){" + 
        "let b=scriptsShow[q];" + 
        "axios.get(b)." + 
        "then(function(data){localStorage.getItem(b,data.data);})" + 
        "}break;" + //end of for 
        "}" + //end of else
        "}" + //end of for
        "if(flag){" +         
        "LazyLoad.js(scriptsShow,function(){});" +         
        "}" + //end of flag        
        "})()" + //end of function
        "</script>" +
        
        // webAssetsHelp.scripts +
        "{% endblock %}";
    return _html;
}