var dbutil = require("./dbutil");//引自己的模块要加./
//每一次请求都创建一个连接 使用完又关闭链接
function queryAllStudent(success) {
    var querySql = "select * from students;";
    var connection =dbutil.createConnection();
    connection.connect();
    connection.query(querySql,function (error,result) {
        if(error == null){
            console.log(result);
            success(result);
        }else{
            console.log(error)
        }
    });
    connection.end();
}
function queryStudentByIdAndBirth(idNum,birth) {
    var querySql = "select * from students where id = ? and birth = ?;";
    var queryParams = [idNum,birth];
    var connection =dbutil.createConnection();
    connection.connect();
    connection.query(querySql,queryParams,function (error,result) {
        if(error == null){
            console.log(result)

        }else{
            console.log(error)
        }
    });
    connection.end();
}

function queryStudentByStuBirth(stuBirth,success){
    var querySql = "select * from students where birth = ?;";
    // console.log(stuBirth);
    var connection =dbutil.createConnection();
    connection.connect();
    connection.query(querySql,stuBirth,function (error,result) {
        if(error == null){
            console.log(result);
            success(result);
        }else{
            console.log(error)
        }
    });
    connection.end();
}
module.exports = {
   "queryAllStudent":queryAllStudent,
    "queryStudentByIdAndBirth":queryStudentByIdAndBirth,
    "queryStudentByStuBirth":queryStudentByStuBirth
};