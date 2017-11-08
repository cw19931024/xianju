const Promise = require("../plugins/es6-promise");
const formatTime = date => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return (
    [year, month, day].map(formatNumber).join("/") +
    " " +
    [hour, minute, second].map(formatNumber).join(":")
  );
};

const formatNumber = n => {
  n = n.toString();
  return n[1] ? n : "0" + n;
};

//将时间转换为模糊字段
const DateStr = num => {
  var date = new Date().getTime();
  var time = parseInt((date - num) / 1000);
  var str = "";
  if (time < 60) {
    str = parseInt(time) + "秒前";
    return str;
  }
  if (time > 59 && time < 3600) {
    str = parseInt(time / 60) + "分钟前";
    return str;
  }
  if (time > 3599 && time < 86400) {
    str = parseInt(time / 3600) + "小时前";
    return str;
  }
  if (time > 86399 && time < 2592000) {
    str = parseInt(time / 86400) + "天前";
    return str;
  }
  if (time > 2591999 && time < 31104000) {
    str = parseInt(time / 2592000) + "个月前";
    return str;
  }
  if (time > 31103999 && time < 62208000) {
    str = parseInt(time / 31104000) + "年前";
    return str;
  } else {
    str = "很久之前";
    return str;
  }
};

const ajax = e => {
  return new Promise(function(resolve, reject) {
    wx.request({
      url: e.url,
      method: e.type || "GET",
      data: e.data,
      success: function(e) {
        resolve(e.data);
      },
      fail(e) {
        reject(e);
      }
    });
  });
};

module.exports = {
  formatTime: formatTime,
  DateStr: DateStr,
  Ajax: ajax
};
