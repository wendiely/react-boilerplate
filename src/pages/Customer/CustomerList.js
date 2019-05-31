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
import { Button, Table, Divider, Popconfirm, message } from "antd";
import Form from "../../components/Form";

import "../../mock";

class CustomerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };

    this.search = this.search.bind(this);
  }
  // 组件挂载后调用一次
  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    // const pathname = this.props.location.pathname;
    // if (pathname === "/customerList") {
    console.log(1111);
    axios.get("/customerList").then(res => {
      console.log("mock返回数据", res);
      this.setState({ list: res.data.data });
    });
    // }
  }
  // 重置
  Reset = item => {
    axios.get("/customerList").then(res => {
      console.log("mock返回数据", res);
      this.setState({ list: res.data.data });
    });
  };
  // 删除一条信息
  delete(item) {
    console.log("东搜", item);
    const id = item.id;
    console.log("/customerList?id=" + id);
    axios.post("/customerList", { id: item.id }).then(res => {
      console.log("删除操作返回mock数据", res.data.data);
      this.setState({ list: res.data.data });
    });
    message.success("删除客户" + item.name + "的信息");
  }
  // 取消删除
  cancel() {
    message.error("取消删除");
  }
  // 搜索，供父子组件调用
  search = item => {
    console.log("搜索搜索搜索搜索", item);
    // const id = item.id;
    // console.log("/customerList?id=" + id);
    axios.post("/customerListSq", item).then(res => {
      console.log("删除操作返回mock数据", res.data.data);
      this.setState({ list: res.data.data });
    });
  };

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
      },
      table: {
        // padding: "0 50px",
        // boxSizing: "border-box",
        // marginTop: 50
      },
      mar: {
        marginLeft: "30px"
      }
    };
    const columns = [
      {
        title: "序号",
        dataIndex: "id",
        key: "id"
        // render: text => <a href="javascript:;">{text}</a>
      },
      {
        title: "姓名",
        dataIndex: "name",
        key: "name"
        // render: text => <a href="javascript:;">{text}</a>
      },
      {
        title: "电话",
        dataIndex: "phone",
        key: "phone"
      },
      {
        title: "邮箱",
        dataIndex: "email",
        key: "email"
      },
      {
        title: "年龄",
        dataIndex: "age",
        key: "age"
      },
      {
        title: "生日",
        dataIndex: "birthday",
        key: "birthday"
      },
      {
        title: "居住城市",
        dataIndex: "city",
        key: "city"
      },
      {
        title: "操作",
        key: "action",
        render: (text, record) => (
          <span>
            <Button
              style={styleCss.buttonRight}
              type="primary"
              size="default"
              onClick={() => {
                this.props.history.push({
                  pathname: "/customerList/customerDetail/" + record.id,
                  state: { detail: record }
                });
              }}
            >
              编辑
            </Button>
            <Divider type="vertical" />
            <Popconfirm
              title="确认要删除吗?"
              onConfirm={() => this.delete(record)}
              onCancel={() => this.cancel(record)}
              okText="是的"
              cancelText="取消"
            >
              <Button type="primary" size="default">
                删除
              </Button>
            </Popconfirm>
          </span>
        )
      }
    ];
    const sql = {
      name: "",
      phone: ""
    };
    return (
      <div style={styleCss.table}>
        <h2>
          客户列表{" "}
          <Button
            style={styleCss.mar}
            type="primary"
            size="default"
            onClick={() => {
              this.props.history.push({
                pathname: "/customerList/customerDetail/0"
              });
            }}
          >
            新建
          </Button>
        </h2>
        <Form comment={sql} Reset={this.Reset} search={this.search} />
        <Table columns={columns} dataSource={this.state.list} />
      </div>
    );
  }
}

CustomerList.propTypes = {
  history: PropTypes.object
};
export default CustomerList;
