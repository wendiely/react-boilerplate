import React from "react";
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Layout, Menu, Icon } from "antd";

const { SubMenu } = Menu;
const { Sider } = Layout;

class SecondMenu extends React.Component {
  constructor(props) {
    super(props);
    (this.state = {
      list: [],
      name: ""
    }),
      console.log(666, props);
    this.handleClick = this.handleClick.bind(this); // 改变this的指向
  }
  componentDidMount() {
    console.log("我是二级导航的加载", this.props);
    // this.setState({ name: JSON.parse(localStorage.getItem("denglu"))[0].name });
  }

  // let TabPane = Tabs.TabPane;
  handleClick(key) {
    //   console.log(2, key);
    console.log(2, key, this);
    if (key.key === "/mobileComponent") {
      this.props.history.push({ pathname: "/mobileComponent" });
    }
    // else if (key.key === "/userList") {
    //     this.props.history.push({ pathname: "/userList" });
    //   } else if (key.key === "/shopList") {
    //     this.props.history.push({ pathname: "/shopList" });
    //   } else if (key.key === "/testComponent") {
    //     this.props.history.push({ pathname: "/testComponent" });
    //   }
  }

  render() {
    console.log("");

    return (
      <Sider width={200} style={{ background: "#fff" }}>
        <Menu
          mode="inline"
          onClick={this.handleClick}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%" }}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                显示
              </span>
            }
          >
            <Menu.Item key="/mobileComponent">手机显示部分</Menu.Item>
            <Menu.Item key="2">富文本的编辑与显示</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="laptop" />
                数据
              </span>
            }
          >
            <Menu.Item key="5">数据可视化分析</Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={
              <span>
                <Icon type="notification" />
                subnav 3
              </span>
            }
          >
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>

      // <div>
      //   <Row>
      //     <Col span={6} push={20}>
      // <span style={{ margin: "0 10px 0 0" }}>{this.state.name}</span>
      // <Button
      //   type="primary"
      //   size="default"
      //   onClick={() => {
      //     localStorage.removeItem("isLogin");
      //     localStorage.removeItem("denglu"); // 删除登录信息
      //     this.props.history.push("/login");
      //   }}
      // >
      //   log out
      // </Button>
      //     </Col>
      //   </Row>

      //   <Row>
      //     <Col span={18} push={2}>
      //       <Tabs
      //         defaultActiveKey={this.props.location.pathname}
      //         onChange={this.callback}
      //       >
      //         <TabPane tab="客户列表" key="/customerList" />
      //         <TabPane tab="用户列表" key="/userList" />
      //         <TabPane tab="商品列表" key="/shopList" />
      //       </Tabs>
      //       {/* <Link style={styleCss.bgc} to="/customerList">客户列表</Link>
      //       <Link style={styleCss.bgc} to="/userList">用户列表</Link>
      //       <Link style={styleCss.bgc} to="/shopList">商品列表</Link> */}
      //     </Col>
      //   </Row>
      // </div>
    );
  }
}

SecondMenu.propTypes = {
  history: PropTypes.object,
  handleClick: PropTypes.func
};

export default SecondMenu;
