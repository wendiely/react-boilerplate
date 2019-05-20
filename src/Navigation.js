import React from "react";
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Layout, Menu, Button } from "antd";

// const { SubMenu } = Menu;
const { Header } = Layout;

// function ContentDefault(path, props) {
//   console.log('werwrwerwrew', path)
//   switch (path) {
//     case '/userList':
//       return <UserList {...props}/>;
//     case '/userDetail':
//       return <UserDetail  />;
//     case '/shopList':
//       return <ShopList {...props}/>;
//     case '/customerList':
//       return <CustomerList {...props}/>;
//     case '/customerDetail':
//       return <CustomerDetail  />;
//     default:
//       return null;
//   }

// }

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    (this.state = {
      list: [],
      name: ""
    }),
      console.log(666, props);
    this.callback = this.callback.bind(this); // 改变this的指向
  }
  componentDidMount() {
    console.log("11开始导航navigation mounted......", this.props);
    this.setState({ name: JSON.parse(localStorage.getItem("denglu"))[0].name });
  }

  // let TabPane = Tabs.TabPane;
  callback(key) {
    console.log(2, key);
    console.log(2, key, this);
    if (key.key === "/customerList") {
      this.props.history.push({ pathname: "/customerList" });
    } else if (key.key === "/userList") {
      this.props.history.push({ pathname: "/userList" });
    } else if (key.key === "/shopList") {
      this.props.history.push({ pathname: "/shopList" });
    }
  }

  render() {
    console.log("加载导航部分navigationProps:");
    // const TabPane = Tabs.TabPane;

    return (
      <Layout>
        <Header className="header">
          <div
            className="logo"
            style={{
              fontSize: "30px",
              color: "#fff",
              float: "left",
              marginRight: "10px"
            }}
          >
            聚奢网
          </div>
          <div className="logo" style={{ color: "#fff", float: "right" }}>
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
          </div>
          <Menu
            theme="dark"
            onClick={this.callback}
            mode="horizontal"
            defaultSelectedKeys={[this.props.location.pathname]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="/customerList">客户列表</Menu.Item>
            <Menu.Item key="/userList">用户列表</Menu.Item>
            <Menu.Item key="/shopList">商品列表</Menu.Item>
          </Menu>
        </Header>
      </Layout>
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

Navigation.propTypes = {
  history: PropTypes.object,
  callback: PropTypes.func
};

export default Navigation;
