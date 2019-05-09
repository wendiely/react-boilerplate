import baseAxios from "@/utils/apiUtils";

class DemoApi {
  getTestInfo = data => {
    const API_ROOT = "";
    const url = `/token/_generate`;
    return baseAxios(API_ROOT, url, data).then(res => {
      return res;
    });
  };
}

export default new DemoApi();
