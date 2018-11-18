var fs = require("fs");
var globalConfig = require("./config");
var filterSet = [];
var filse = fs.readdirSync(globalConfig["filter_path"]);
for(var i = 0; i < filse.length ;i++){
    var temp = require("./" + globalConfig["filter_path"] + "/" + filse[i]);
    filterSet.push(temp);
}
module.exports = filterSet;