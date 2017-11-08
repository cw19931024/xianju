const util = require("../../../utils/util.js");
const api = {
    propertyList:"http://www.easy-mock.com/mock/59e49e5f8a681e09d38c729d/xianju/propertyList",
    info:"http://www.easy-mock.com/mock/59e49e5f8a681e09d38c729d/xianju/propertyList",
}
const propertyList = e => {
  let data = e||{};
  data.url = api.propertyList;
  return util.Ajax(data).then(function(res) {
    return res;
  });
};

module.exports = {
  propertyList: propertyList
};
