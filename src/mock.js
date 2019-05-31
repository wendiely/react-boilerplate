// 客户列表的mock数据
import Mock from "mockjs";

// 配置拦截 ajax 的请求时的行为，支持的配置项目有 timeout。
Mock.setup({
  timeout: "200 - 400"
});

// 实现客户列表的增删改查
// 定义原始数据
const arrOBject = Mock.mock({
  "data|20-25": [
    {
      "index|+1": 0,
      name: "@cname", // 中文名称
      phone: /^1[385][1-9]\d{8}/,
      email: "@email",
      "id|+1": 88, // 属性值自动加 1，初始值为88
      "age|18-28": 0, // 18至28以内随机整数, 0只是用来确定类型
      birthday: '@date("yyyy-MM-dd")', // 日期
      city: "@city(true)", // 中国城市
      color: "@color", // 16进制颜色
      "isMale|1": true, // 布尔值
      "isFat|1-2": true, // true的概率是1/3
      "brother|1": ["jack", "jim"], // 随机选取 1 个元素
      "sister|+1": ["jack", "jim", "lily"], // array中顺序选取元素作为结果
      "friends|2": ["jack", "jim"] // 重复2次属性值生成一个新数组
    }
  ]
});
arrOBject.data.map(i => (i.city = i.city.split(" ")));
let arr = arrOBject.data;
console.log("mock里的", arrOBject, arr);

// 实行展示，删除，修改操作
const list = function(options) {
  console.log("fanhide ", options);
  const rtype = options.type.toLowerCase(); //获取请求的类型并转换为小写
  console.log(5678, options.type);
  switch (rtype) {
    case "get":
      console.log(rtype);
      arr = arrOBject.data;
      break;
    // eslint-disable-next-line no-case-declarations
    case "put":
      console.log("修改", rtype);
      const theChange = arr.filter(
        val => val.id === JSON.parse(options.body).id
      )[0];
      theChange.name = JSON.parse(options.body).name;
      theChange.phone = JSON.parse(options.body).phone;
      theChange.email = JSON.parse(options.body).email;
      theChange.birthday = JSON.parse(options.body).birthday;
      theChange.city = JSON.parse(options.body).city;
      theChange.age = JSON.parse(options.body).age;
      break;
    case "post":
      console.log(5678);
      // let id = parseInt(JSON.parse(options.body).params.id); // 获取请求的id，将options.body转换为JSON对象
      arr = arr.filter(function(val) {
        console.log(val);
        return val.id !== parseInt(JSON.parse(options.body).id); // 过滤掉前台传过来的id对应的相应数据，并重新返回
      });
      break;
    default:
      break;
  }
  // if (rtype === 'post') {

  //     arr = arr.filter(function(val) {
  //         return val.id !== parseInt(JSON.parse(options.body).params.id);  // 过滤掉前台传过来的id对应的相应数据，并重新返回
  //     });
  // }
  console.log(arr);
  return {
    data: arr
  };
};

Mock.mock("/customerList", "get", list); // 获取列表
Mock.mock("/customerList", "post", list); // 删除一条数据
Mock.mock("/customerList", "put", list); // 修改一条数据

// 新增操作
const listAdd = function(options) {
  console.log("fanhide ", options);
  const rtype = options.type.toLowerCase(); //获取请求的类型并转换为小写
  switch (rtype) {
    // eslint-disable-next-line no-case-declarations
    case "post":
      console.log(5678, "我是新增的接口");
      const len = arr.length;
      arr[len] = JSON.parse(options.body);
      arr[len]["id"] = parseInt(arr[len - 1].id) + 1;
      break;
    default:
      break;
  }
  console.log(arr);
  return {
    data: arr
  };
};
Mock.mock("/customerListAdd", "post", listAdd); // 增加一条数据

// 搜索操作
const listSq = function(options) {
  console.log("fanhide ", options);
  const rtype = options.type.toLowerCase(); //获取请求的类型并转换为小写
  switch (rtype) {
    // eslint-disable-next-line no-case-declarations
    case "post":
      console.log(5678, "执行搜索操作", JSON.parse(options.body));
      const condition = JSON.parse(options.body);
      if (condition.name !== undefined) {
        arr = arr.filter(i => i.name === condition.name);
      }
      if (condition.phone !== undefined) {
        arr = arr.filter(i => i.phone === condition.phone);
      }
      break;
    default:
      break;
  }
  console.log(arr);
  return {
    data: arr
  };
};
Mock.mock("/customerListSq", "post", listSq); // 增加一条数据

// Mock.mock('/customerList', {
//     "mocktest|10-15": [{
//         'index|+1': 0,
//         'name': '@cname', // 中文名称
//         'id|+1': 88, // 属性值自动加 1，初始值为88
//         'age|18-28': 0, // 18至28以内随机整数, 0只是用来确定类型
//         'birthday': '@date("yyyy-MM-dd")', // 日期
//         'city': '@city(true)', // 中国城市
//         'color': '@color', // 16进制颜色
//         'isMale|1': true, // 布尔值
//         'isFat|1-2': true, // true的概率是1/3
//         'brother|1': ['jack', 'jim'], // 随机选取 1 个元素
//         'sister|+1': ['jack', 'jim', 'lily'], // array中顺序选取元素作为结果
//         'friends|2': ['jack', 'jim'] // 重复2次属性值生成一个新数组
//     }]
// })

// 商品列表 --- 数据属性暂不符合
Mock.mock("/shopList", {
  "mocktest|35-55": [
    {
      "key|+1": 1,
      name: "@ctitle", // 中文名称
      "age|18-28": 0, // 18至28以内随机整数, 0只是用来确定类型
      "address|1": "@city(true)", // 中国城市
      tags: ["nice", "loser"]
    }
  ]
});
