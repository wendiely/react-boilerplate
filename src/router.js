import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from "react-router-dom";
import UserList from "./pages/UserList";
import UserDetail from "./pages/UserDetail";
import ShopList from "./pages/shopList";
import CustomerList from "./pages/CustomerList";
import CustomerDetail from "./pages/CustomerDetail";
import Navigation from "./Navigation";
import Login from "./pages/Login";
import PropTypes from "prop-types";

import { Layout, Menu, Breadcrumb, Icon } from "antd";

const { SubMenu } = Menu;
const { Content, Footer, Sider } = Layout;

const NoMatch = props => {
  return (
    <div>
      {" "}
      page not found, click me back to <Link to="/">home page</Link>
    </div>
  );
};

const isLogin = () => localStorage.getItem("isLogin") === "1";

/**
 * 需要登录才能进入的路由包装
 * @param Component
 * @param rest
 * @returns {XML}
 * @constructor
 */
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (isLogin()) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                /* eslint-disable */
                state: { from: props.location }
                /* eslint-enable */
              }}
            />
          );
        }
      }}
    />
  );
};
PrivateRoute.propTypes = {
  component: PropTypes.func
};

/**
 * 需要登录才能进入的路由包装(喊导航头)
 * @returns {XML}
 * @constructor
 */
const NavigationRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        console.log("bababbaa", props);
        if (isLogin()) {
          return (
            <div>
              <Navigation {...props} />
              {/* <Component {...props} /> */}
              <Content style={{ padding: "0 50px" }}>
                <Breadcrumb style={{ margin: "16px 0" }}>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item>List</Breadcrumb.Item>
                  <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Layout style={{ padding: "24px 0", background: "#fff" }}>
                  <Sider width={200} style={{ background: "#fff" }}>
                    <Menu
                      mode="inline"
                      defaultSelectedKeys={["1"]}
                      defaultOpenKeys={["sub1"]}
                      style={{ height: "100%" }}
                    >
                      <SubMenu
                        key="sub1"
                        title={
                          <span>
                            <Icon type="user" />
                            subnav 1
                          </span>
                        }
                      >
                        <Menu.Item key="1">option1</Menu.Item>
                        <Menu.Item key="2">option2</Menu.Item>
                        <Menu.Item key="3">option3</Menu.Item>
                        <Menu.Item key="4">option4</Menu.Item>
                      </SubMenu>
                      <SubMenu
                        key="sub2"
                        title={
                          <span>
                            <Icon type="laptop" />
                            subnav 2
                          </span>
                        }
                      >
                        <Menu.Item key="5">option5</Menu.Item>
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
                  <Content style={{ padding: "0 24px", minHeight: 280 }}>
                    <Component {...props} />
                  </Content>
                </Layout>
              </Content>
              <Footer style={{ textAlign: "center" }}>
                Ant Design ©2018 Created by Ant UED
              </Footer>
            </div>
          );
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                /* eslint-disable */
                state: { from: props.location }
                /* eslint-enable */
              }}
            />
          );
        }
      }}
    />
  );
};
NavigationRoute.propTypes = {
  component: PropTypes.func
};

class AppRouter extends React.Component {
  componentDidMount() {
    console.log("didMount");
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route component={Login} path="/" exact />
            <Route component={Login} path="/login" exact />
            <NavigationRoute path="/shopList" component={ShopList} exact />
            <NavigationRoute path="/userList" component={UserList} exact />
            <NavigationRoute
              path="/customerList"
              component={CustomerList}
              exact
            />
            <NavigationRoute
              path="/customerDetail"
              component={CustomerDetail}
              exact
            />
            <NavigationRoute path="/userDetail" component={UserDetail} exact />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default AppRouter;
