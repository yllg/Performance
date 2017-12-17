/*
 *@Description 通过HtmlWebpackPlugin自定义处理静态资源
 *@Author yuanzhijia@yidengxuetang.com
 *@Date 2016-05-05
 */
module.exports = function(templateParams, cssList) {
     console.log('入口文件', templateParams.htmlWebpackPlugin.files);
    var _files = templateParams.htmlWebpackPlugin.files;
     console.log('文件', _files);
    var _regChunk = templateParams.htmlWebpackPlugin.options.chunks;
    var _regCss = cssList;
    var _scripts = "";
    var _scriptsShow = [];
    var _styles = "";
    for (var i = 0; i < _regChunk.length; i++) {
        _scripts += "<script type='text/javascript'  src='" + _files.chunks[_regChunk[i]]['entry'] + "'></script>";
        _scriptsShow.push("'" + _files.chunks[_regChunk[i]]['entry'] + "'")
    }
    for (var k = 0; k < _regCss.length; k++) {
        var _cssitem = _regCss[k],
            _cssitems = new RegExp("^" + _cssitem),
            _cssiteme = new RegExp(".css$");
        (_files.css).map(function(filename) {
            var _filearr = filename.split('/'),
                filrdata = _filearr[_filearr.length - 1];
            if (_cssitems.test(filrdata) && _cssiteme.test(filrdata)) {
                _styles += '<link rel="stylesheet" type="text/css" href="' + filename + '"/>';
            }
        });
    }
    return {
        scripts: _scripts,
        styles: _styles,
        scriptsShow: _scriptsShow
    }
}