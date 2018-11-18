var fs = require("fs");
var globalConfig = require("./config");
var fileName = globalConfig.log_path + globalConfig.log_name;
//异步的
// fs.writeFile(fileName,"sad",function () {});
//同步
// fs.writeFileSync(fileName,"hhh");
function log(data) {
    console.log(data);
    //创建日志文件 没有的话就创建日志 有的话就直接写入  flag:a  是可写可创建可追加
    fs.appendFile(fileName,data+ "\n",{flag:"a"},function () {});

}
module.exports = log;