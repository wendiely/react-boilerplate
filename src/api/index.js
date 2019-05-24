import baseAxios from "@/utils/apiUtils";

class DemoApi {
  getTestInfo = data => {
    console.log("api是什么", baseAxios);
    const params = {
      API_ROOT:
        "https://www.easy-mock.com/mock/5be92cb269c4eb462295e5f3/example",
      url: `/mock`,
      type: "GET",
      data
    };
    return baseAxios(params).then(res => {
      return res;
    });
  };
  getUesrList = e => {
    const params = {
      API_ROOT:
        "https://www.easy-mock.com/mock/5ccfdc8d161a426d64acdaf8/example",
      // "https://www.easy-mock.com/mock/5be92cb269c4eb462295e5f3/example",
      url: `/tableNumber`,
      type: "GET",
      data: {
        page: e.page,
        pageSize: e.pageSize
      }
    };
    return baseAxios(params).then(res => {
      return res;
    });
  };
  // 删除接口
  delelteUesrList = e => {
    const params = {
      API_ROOT:
        "https://www.easy-mock.com/mock/5ccfdc8d161a426d64acdaf8/example",
      url: `/tableNumber`,
      type: "GET",
      data: e
    };
    // const paramsSerializer = function(params) {
    //   return qs.stringify(params, { indices: false })
    // }

    console.log(333333333333333, e, params);
    return baseAxios(params).then(res => {
      console.log("bgbgbg", res);
      return res;
    });
  };

  BizChart = e => {
    const params = {
      url: `/Bizchart`,
      type: "GET",
      data: e
    };
    console.log(333333333333333, e, params);
    return baseAxios(params).then(res => {
      return res;
    });
  };
}

export default new DemoApi();
