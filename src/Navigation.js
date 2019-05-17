import React from "react";
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Row, Col, Button, Tabs } from "antd";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    (this.state = {
      list: [],
      name: ""
      // eslint-disable-next-line react/prop-types
      // key: props.location.pathname
    }),
      console.log(666, props);
    this.callback = this.callback.bind(this); // 改变this的指向
  }
  componentDidMount() {
    console.log(
      "11开始导航navigation mounted......",
      JSON.parse(localStorage.getItem("denglu"))[0].name
    );
    this.setState({ name: JSON.parse(localStorage.getItem("denglu"))[0].name });
  }

  // let TabPane = Tabs.TabPane;
  callback(key) {
    console.log(2, key, this);
    if (key === "/customerList") {
      this.props.history.push({ pathname: "/customerList" });
    } else if (key === "/userList") {
      this.props.history.push({ pathname: "/userList" });
    } else if (key === "/shopList") {
      this.props.history.push({ pathname: "/shopList" });
    }
  }

  render() {
    console.log("加载导航部分navigationProps:");
    const TabPane = Tabs.TabPane;

    return (
      <div>
        <Row>
          <Col span={6} push={20}>
            <span style={{ margin: "0 10px 0 0" }}>{this.state.name}</span>
            <Button
              type="primary"
              size="default"
              onClick={() => {
                localStorage.removeItem("isLogin");
                localStorage.removeItem("denglu"); // 删除登录信息
                this.props.history.push("/login");
              }}
            >
              log out
            </Button>
          </Col>
        </Row>
        <Row>
          <Col span={18} push={2}>
            <Tabs
              defaultActiveKey={this.props.location.pathname}
              onChange={this.callback}
            >
              <TabPane tab="客户列表" key="/customerList" />
              <TabPane tab="用户列表" key="/userList" />
              <TabPane tab="商品列表" key="/shopList" />
            </Tabs>
            {/* <Link style={styleCss.bgc} to="/customerList">客户列表</Link>
            <Link style={styleCss.bgc} to="/userList">用户列表</Link>
            <Link style={styleCss.bgc} to="/shopList">商品列表</Link> */}
          </Col>
        </Row>
      </div>
    );
  }
}

Navigation.propTypes = {
  history: PropTypes.object,
  callback: PropTypes.func
};

export default Navigation;
