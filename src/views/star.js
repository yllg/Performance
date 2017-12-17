module.exports = function (templateParams) {
    var _cssList = ['vendor'];
    var webAssetsHelp = require('./webAssetsHelp.js')(templateParams, _cssList);

    var _html = "{% extends './layout.html' %}" +
        "{% block title %}KOA2{{title}}{% endblock %}" +
        "{% block styles %}" +
        webAssetsHelp.styles +
        "{% endblock %}" +
        "{% block content %}{% include '../widget/star.html' %}{% endblock %}" +
        "{% block script %}" +
        webAssetsHelp.scripts +
        "{% endblock %}";
    return _html;
}