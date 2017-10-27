//logs.js
Page({
  data: {
    type: [{ label: "攻略", id: 1 }, { label: "小技巧", id: 2 }],
    list: []
  },
  onLoad: function() {
    this.getDocumentList();
  },
  getDocumentList: function() {
    let _this = this;
    wx.request({
      url:
        "http://www.easy-mock.com/mock/59e49e5f8a681e09d38c729d/xianju/document/raiders",
      success: function(data) {
        _this.setData({
          list: data.data.data
        });
      }
    });
  },
});
