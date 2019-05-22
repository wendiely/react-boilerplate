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
import TestComponent from "./pages/TestAd";
import MobileComponent from "./pages/mobileList";
import StepsZou from "./pages/StepsZou";
import Navigation from "./Navigation";
import SecondMenu from "./SecondMenu";
import Login from "./pages/Login";
import PropTypes from "prop-types";

import { Layout, Menu, Breadcrumb, Icon } from "antd";

const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;

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
              <Layout>
                <Header className="header">
                  <Navigation {...props} />
                </Header>
                <Content style={{ padding: "0 50px" }}>
                  <Breadcrumb style={{ margin: "16px 0" }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                  </Breadcrumb>

                  <Layout
                    style={{
                      padding: "24px 0",
                      background: "#fff",
                      height: "750px",
                      overflowY: "scroll"
                    }}
                  >
                    <SecondMenu {...props} />

                    <Content style={{ padding: "0 24px", minHeight: 280 }}>
                      <Component {...props} />
                    </Content>
                  </Layout>
                </Content>

                <Footer style={{ textAlign: "center" }}>
                  JUSHEWANG ©2019 Created by ZeroZeroNine
                </Footer>
              </Layout>
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
              path="/customerList/customerDetail"
              component={CustomerDetail}
              exact
            />
            <NavigationRoute path="/userDetail" component={UserDetail} exact />
            <NavigationRoute
              path="/testComponent"
              component={TestComponent}
              exact
            />
            <NavigationRoute
              path="/mobileComponent"
              component={MobileComponent}
              exact
            />
            <NavigationRoute path="/StepsZou" component={StepsZou} exact />

            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default AppRouter;
