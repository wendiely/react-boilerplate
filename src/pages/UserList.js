import React from "react";
import Table from "../components/TableComponent";
// import Axios from "axios";
import DemoApi from "@/api";
import PropTypes from "prop-types";

// const UserList = props => {
//   return (
//
//   );
// };
class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      page: 1,
      pageSize: 10,
      ids: []
    };
    this.delete = this.delete.bind(this);
    this.editor = this.editor.bind(this);
  }

  // 进入页面时掉用
  componentDidMount() {
    const e = {
      page: this.state.page,
      pageSize: this.state.pageSize,
      id: JSON.stringify(this.state.ids)
    };

    console.log("初始化", e, this.state.ids);
    this.getNumber(e);
  }
  // 单个删除
  delete(e) {
    // e是子组件传出的值
    this.state.ids.push(e.id);
    const val = {
      page: this.state.page,
      pageSize: this.state.pageSize,
      id: JSON.stringify(this.state.ids)
    };
    console.log("我是val", val);
    DemoApi.delelteUesrList(val).then(res => {
      this.setState({ list: res.data });
      console.log(res);
    });
  }
  // 编辑，去往编辑页面
  editor(e) {
    console.log(e);
    // eslint-disable-next-line react/prop-types
    this.props.history.push({
      pathname: "/userDetail",
      state: { detail: e }
    });
  }

  // 掉用接口
  getNumber(e) {
    console.log(8888888);
    DemoApi.getUesrList(e).then(res => {
      console.log("我调用加的api了", res);
      this.setState({ list: res.data });
      console.log(this.state.list, res.data);
    });
  }

  render() {
    return (
      <div style={{ marginTop: 50 }}>
        <div>用户列表</div>
        <Table
          comment={this.state.list}
          delete={this.delete}
          editor={this.editor}
        />
      </div>
    );
  }
}
UserList.PropTypes = {
  history: PropTypes.object
};

export default UserList;
