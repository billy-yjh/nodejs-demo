var fs = require("fs");
var globalConfig = require("./config");
//读取路径
var filse = fs.readdirSync(globalConfig["web_path"]);
var pathMap = new Map();
var controllerSet = [];
for(var i = 0; i < filse.length ;i++){
    var temp = require("./" + globalConfig["web_path"] + "/" + filse[i]);
    //判断有没有path
    if(temp.path){
        for(var [key,value] of temp.path){
            if(pathMap.get(key) == null){
                pathMap.set(key,value);
            }else{
                throw new Error("url path异常,url:" + key);
            }
            controllerSet.push(temp);
        }
    }
}
module.exports = pathMap;