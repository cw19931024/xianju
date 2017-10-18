//logs.js
const util = require("../../../utils/util.js");

Page({
  data: {
    list: [],
    imgUrls: [
      "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
      "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg",
      "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg"
    ]
  },
  onLoad: function() {
    this.getPropertyList();
  },
  getPropertyList: function() {
    let _this = this;
    wx.request({
      url:
        "http://mock.qiaofang.local/mock/59e4b5706e68f216cf6fc43e/xianju/propertyList",
      success: function(data) {
        data.data.data.forEach(function(e) {
          e.property.TimeStr = _this.DateStr(e.property.dateTime)
        }, this);
        _this.setData({
          list: data.data.data
        });
      }
    });
  },
  DateStr: function(num) {
    var date = new Date().getTime();
    var time = parseInt((date - num) / 1000);
    var str = '';
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
  }
});
