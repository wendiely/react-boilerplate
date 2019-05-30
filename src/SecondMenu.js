import React from "react";
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Layout, Menu, Icon } from "antd";
// import { threadId } from "worker_threads";

const { SubMenu } = Menu;
const { Sider } = Layout;

class SecondMenu extends React.Component {
  constructor(props) {
    super(props);
    (this.state = {
      list: [],
      name: "",
      openKeys: [],
      // 显示的一级菜单
      rootSubmenuKeys: ["sub1", "sub2", "sub4"]
    }),
      console.log(666, props);
    this.handleClick = this.handleClick.bind(this); // 改变this的指向
  }
  componentDidMount() {
    console.log("我是二级导航的加载", this.props);
    const pathname = this.props.location.pathname.replace("/", "");
    this.setState({ openKeys: [pathname] });
    this.onOpenChange([pathname]);
  }

  // let TabPane = Tabs.TabPane;
  handleClick(key) {
    console.log(2, key, this);
    if (key.key === "/mobileComponent") {
      this.props.history.push({ pathname: "/mobileComponent" });
    } else if (key.key === "/customerList") {
      this.props.history.push({ pathname: "/customerList" });
    } else if (key.key === "/userList") {
      this.props.history.push({ pathname: "/userList" });
    } else if (key.key === "/shopList") {
      this.props.history.push({ pathname: "/shopList" });
    } else if (key.key === "/testComponent") {
      this.props.history.push({ pathname: "/testComponent" });
    } else if (key.key === "/StepsZou") {
      this.props.history.push({ pathname: "/StepsZou" });
    } else if (key.key === "/Editor") {
      this.props.history.push({ pathname: "/Editor" });
    } else if (key.key === "/BizCharts") {
      this.props.history.push({ pathname: "/BizCharts" });
    } else if (key.key === "/Notice") {
      this.props.history.push({ pathname: "/Notice" });
    }
    // else if (key.key === "/userList") {
    //     this.props.history.push({ pathname: "/userList" });
    //   } else if (key.key === "/shopList") {
    //     this.props.history.push({ pathname: "/shopList" });
    //   } else if (key.key === "/testComponent") {
    //     this.props.history.push({ pathname: "/testComponent" });
    //   }
  }

  onOpenChange = openKeys => {
    console.log("hhhhhhhhhhhhhhhhhhhh哈啊啊啊啊啊啊啊啊啊");
    console.log(this.state.openKeys, openKeys);
    const latestOpenKey = openKeys.find(
      key => this.state.openKeys.indexOf(key) === -1
    );
    console.log(latestOpenKey);
    if (this.state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      });
    }
  };

  render() {
    console.log(this.state.openKeys);

    return (
      <Sider width={200} style={{ background: "#fff" }}>
        <Menu
          mode="inline"
          selectedKeys={[this.props.location.pathname]}
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
          onClick={this.handleClick}
          // defaultOpenKeys={['sub1']}
          // defaultSelectedKeys={[this.props.location.pathname]}
          style={{ height: "100%" }}
        >
          <Menu.Item key="/Notice">首页</Menu.Item>
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
            <Menu.Item key="/Editor">富文本的编辑与显示</Menu.Item>
            <Menu.Item key="/testComponent">测试组件</Menu.Item>
            <Menu.Item key="/StepsZou">支付步骤</Menu.Item>
          </SubMenu>
          <SubMenu
            key="user"
            title={
              <span>
                <Icon type="laptop" />
                使用者
              </span>
            }
          >
            <Menu.Item key="/userList">Users</Menu.Item>
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
            <Menu.Item key="/BizCharts">数据可视化分析</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            defaultSelectedKeys={["/customerList"]}
            title={
              <span>
                <Icon type="notification" />
                客户
              </span>
            }
          >
            <Menu.Item key="/customerList">客户列表</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub4"
            defaultSelectedKeys={["/shopList"]}
            title={
              <span>
                <Icon type="notification" />
                商品
              </span>
            }
          >
            <Menu.Item key="/shopList">商品列表</Menu.Item>
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
