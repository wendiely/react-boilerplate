// import React from "react";

// const CustomerList = props => {
//   componentDidMount => {
//     console.log('客户列表', this.props)
//   }

//     return (
//       <div style={{ marginTop: 100 }}>
//         <h2>客户列表列表</h2>
//         <h1>我认为</h1>
//       </div>
//     );

// };

// export default CustomerList;

import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { Button } from "antd";

import "../mock";

class CustomerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
    // this.delete = this.delete.bind(this)
  }
  // 组件挂载后调用一次
  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    const pathname = this.props.location.pathname;
    if (pathname === "/customerList") {
      console.log(1111);
      axios.get("/customerList").then(res => {
        console.log("mock返回数据", res);
        this.setState({ list: res.data.data });
      });
    }
  }
  delete(item) {
    console.log("东搜", item);
    const id = item.id;
    console.log("/customerList?id=" + id);
    axios.post("/customerList", { id: item.id }).then(res => {
      console.log("删除操作返回mock数据", res.data.data);
      this.setState({ list: res.data.data });
    });
    // axios.get('/customerList').then(res => {
    //     console.log('删除操作返回mock数据', res.data.data)
    //     this.setState({ list: res.data.data });
    //   })
  }
  render() {
    const styleCss = {
      td: {
        padding: "10px 20px",
        border: "1px solid black",
        textItem: "center"
      },
      header: {
        borderCollapse: "collapse"
      },
      buttonRight: {
        marginRight: "10px"
      }
    };

    return (
      <div style={{ marginTop: 100 }}>
        <h2>
          客户列表{" "}
          <Button
            type="primary"
            size="default"
            onClick={() => {
              this.props.history.push({ pathname: "/CustomerDetail" });
            }}
          >
            新建
          </Button>
        </h2>
        <table style={styleCss.header}>
          <tbody>
            <tr style={{ color: "black" }}>
              <td style={styleCss.td}>序号</td>
              <td style={styleCss.td}>姓名</td>
              <td style={styleCss.td}>电话</td>
              <td style={styleCss.td}>邮箱</td>
              <td style={styleCss.td}>年龄</td>
              <td style={styleCss.td}>生日</td>
              <td style={styleCss.td}>城市</td>
              <td style={styleCss.td}>兄弟</td>
              <td style={styleCss.td}>姐妹</td>
              <td style={styleCss.td}>身材</td>
              <td style={styleCss.td}>操作</td>
            </tr>
            {this.state.list.map((item, index) => {
              return (
                <tr key={index} style={{ color: item.color }}>
                  <td style={styleCss.td}>{item.id}</td>
                  <td style={styleCss.td}>{item.name}</td>
                  <td style={styleCss.td}>{item.phone}</td>
                  <td style={styleCss.td}>{item.email}</td>
                  <td style={styleCss.td}>{item.age}</td>
                  <td style={styleCss.td}>{item.birthday}</td>
                  <td style={styleCss.td}>{item.city}</td>
                  <td style={styleCss.td}>{item.brother}</td>
                  <td style={styleCss.td}>{item.sister}</td>
                  <td style={styleCss.td}>{item.isFat ? "胖" : "瘦"}</td>
                  {/* <td><button onClick={() => {
                    // localStorage.removeItem("isLogin");
                    this.props.history.push({pathname: "/CustomerDetail", state: {detail: item}});
                  }}
                    >编辑</button></td> */}
                  <td style={styleCss.td}>
                    <Button
                      style={styleCss.buttonRight}
                      type="primary"
                      size="default"
                      onClick={() => {
                        this.props.history.push({
                          pathname: "/CustomerDetail",
                          state: { detail: item }
                        });
                      }}
                    >
                      编辑
                    </Button>
                    <Button
                      type="primary"
                      size="default"
                      onClick={() => this.delete(item)}
                    >
                      删除
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

CustomerList.propTypes = {
  history: PropTypes.object
};
export default CustomerList;
