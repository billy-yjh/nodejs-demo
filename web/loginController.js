var studentService = require("../service/studentService");
var url = require("url");
var path = new Map();
function getData(requset,response) {
    studentService.queryAllStudent(function (result) {
        var resArr = [];
        for(var i = 0 ; i< result.length;i++){
            resArr.push(result[i].name)
        }
        response.write(resArr.toString());
        response.end();
    });
}
path.set("/getData",getData);

function login(request,response){

    //post方法
    request.on("data",function (data) {
        console.log(data)
        var stuBirth = data.toString().split("&")[0].split("=")[1];
        var password = data.toString().split("&")[1].split("=")[1];
        studentService.queryStudentByStuBirth(stuBirth,function (result) {
            var res = "";
            if (result == null || result.length == 0) {
                res = "error";
                response.writeHead(302,{"location":"/error.html"});
                response.end();
            }else{
                if(result[0].pwd == password){
                    res = "OK";
                    //登录后跳转页面 并创建一个cookie
                    response.writeHead(302,{"location":"/main.html","Set-Cookie":"birth=" + result[0].id});
                    response.end();
                }else{
                    res = "error";
                    response.writeHead(302,{"location":"/error.html"});
                    response.end();
                }
            }
            // response.write(res);
            // response.end();
            //重定向

        });
    })
    //get方法
    // var params = url.parse(request.url,true).query;
    // studentService.queryStudentByStuBirth(params.stuBirth,function (result) {
    //     var res = "";
    //     console.log(result.pwd  , params.password );
    //     if (result == null || result.length == 0) {
    //         res = "error";
    //     }else{
    //         if(result[0].pwd == params.password){
    //             res = "OK";
    //         }else{
    //             res = "error";
    //         }
    //     }
    //     response.write(res);
    //     response.end();
    // });
}
path.set("/login",login);
//必须导出path 内容是路径加上方法
module.exports.path = path;