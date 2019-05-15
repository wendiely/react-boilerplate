import React from "react";
import PropTypes from "prop-types";
import DemoApi from "@/api";

class Login extends React.Component {
  componentDidMount() {
    DemoApi.getTestInfo().then(res => {
      console.log(res + "哈哈哈哈哈哈哈哈哈", "getTestInfo");
    });
  }

  handleLogin = () => {
    console.log("the login button clicked......");
    console.log("this:", this);
    localStorage.setItem("isLogin", "1");
    this.props.history.push("/userList"); // 跳转到  /userList路由界面
  };

  render() {
    return (
      <div>
        <h2>the login login page ......</h2>
        <button onClick={this.handleLogin}>login</button>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.object
};

export default Login;
