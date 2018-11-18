var studentDao = require("../dao/studentDao");
function queryAllStudent(success) {
    studentDao.queryAllStudent(success);
}

function queryStudentByStuBirth(stuBirth,success){
    studentDao.queryStudentByStuBirth(stuBirth,success);
}
module.exports = {"queryAllStudent":queryAllStudent,
                    "queryStudentByStuBirth":queryStudentByStuBirth}