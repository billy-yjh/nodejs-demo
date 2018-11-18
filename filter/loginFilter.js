var url = require("url");
var globalConfig = require("../config");
function loginFilter(request,response) {
    var pathName = url.parse(request.url).pathname;
    if(pathName == "/login.html" || pathName == "/login" || isStaticRequest(pathName)){
        console.log("放行");
        return true;
}
    if(request.headers.cookie){
        var cookies = request.headers.cookie.split(";");
        for(var i = 0; i<cookies.length;i++){
            //.trim()去除空格
            if(cookies[i].split("=")[0].trim() == "birth"){
                return true;
            }
        }
    }
    console.log("拦截");
    response.writeHead(302,{"location":"/login.html"});
    response.end();
    return false;
}
//判断是否是静态页面
function isStaticRequest(pathName) {
    for(var i = 0; i< globalConfig.static_file_type.length;i++){
        var temp = globalConfig.static_file_type[i];
        if(temp == ".html"){
            continue;
        }
        if(pathName.indexOf(temp) == pathName.length - temp.length){
            return true;
        }
    }
    return false;
}
module.exports = loginFilter;