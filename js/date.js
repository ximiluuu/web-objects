
// 日期变换
var currentDate = new Date();
var dateElement = document.getElementById("dateText");
var year = currentDate.getFullYear();
var month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
var day = ("0" + currentDate.getDate()).slice(-2);
var formattedDate = year + ' / ' + month + ' / ' + day + ' ';
dateElement.innerText = formattedDate;

var dayOfWeek = currentDate.getDay();  // getDay()方法返回值：0表示周日，1表示周一，以此类推
var isMonday = dayOfWeek === 1;
var messageElement = document.getElementById('messageText');
if (isMonday) {
    messageElement.innerText = '今日闭馆';
} else {
    messageElement.innerText = '今天开馆';
}