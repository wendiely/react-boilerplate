import baseAxios from "@/utils/apiUtils";

class DemoApi {
  getTestInfo = () => {
    const params = {
      API_ROOT:
        "https://www.easy-mock.com/mock/5be92cb269c4eb462295e5f3/example",
      url: `/mock`,
      type: "GET"
    };
    return baseAxios(params).then(res => {
      return res;
    });
  };
}

export default new DemoApi();
