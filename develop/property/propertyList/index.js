//logs.js
const util = require("../../../utils/util.js");
const factory = require("/factory.js");
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
    factory.propertyList().then(function(data) {
      data.data.forEach(function(e) {
        e.property.TimeStr = util.DateStr(e.property.dateTime);
      }, this);
      _this.setData({ list: data.data });
    });
  },
  getDetail: function(e) {
    const id = e.currentTarget.dataset.propertyId;
    console.log(e);
    wx.navigateTo({
      url: "../propertyDetail/index?id=" + id
    });
  }
});
