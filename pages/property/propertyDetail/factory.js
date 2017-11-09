const util = require("../../../utils/util.js");
const api = {
  propertyDetail:
    "http://www.easy-mock.com/mock/59e49e5f8a681e09d38c729d/xianju/propertyDetail",
  info:
    "http://www.easy-mock.com/mock/59e49e5f8a681e09d38c729d/xianju/propertyList"
};
const propertyDetail = e => {
  let data = e || {};
  data.url = api.propertyDetail;
  return util.Ajax(data).then(function(res) {
    return res;
  });
};

module.exports = {
  propertyDetail: propertyDetail,
};
