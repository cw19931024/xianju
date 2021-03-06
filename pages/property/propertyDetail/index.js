//logs.js
const util = require("../../../utils/util.js");
const factory = require("/factory.js");
Page({
  data: {
    property: {},
    imgUrls: [
      "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
      "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg",
      "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg"
    ]
  },
  onLoad: function(option) {
    console.log(option);
    this.getDetail(option);
  },
  getDetail: function(data) {
    let _this = this;
    factory.propertyDetail(data).then(function(res) {
      console.log(res.data);
      _this.setData({ property: res.data });
    });
  }
});
