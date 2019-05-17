import React from "react";
import { Form, Button, Icon, Input, message } from "antd";
import PropTypes from "prop-types";
import DemoApi from "@/api";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    console.log(this.props);
  }
  componentDidMount() {
    DemoApi.getTestInfo().then(res => {
      console.log(res + "哈哈哈哈哈哈哈哈哈", "getTestInfo");
    });
  }

  handleLogin = e => {
    console.log("the login button clicked......");
    console.log("this:", this);
    if (this.state.username === "" || this.state.password === "") {
      message.info("请填写用户名密码"); // 全局提示
    } else {
      const detail = {
        name: this.state.username,
        password: this.state.password
      };
      const userAgoList = [];
      userAgoList.push(detail);
      console.log(userAgoList, JSON.stringify(userAgoList));
      localStorage.setItem("denglu", JSON.stringify(userAgoList));
      // localStorage.setItem("username",this.state.username);
      // localStorage.setItem("password",this.state.password);

      localStorage.setItem("isLogin", "1");
      this.props.history.push("/userList"); // 跳转到  /userList路由界面
    }
  };
  nameChange = e => {
    console.log(e);
    this.setState({ username: e.target.value });
  };
  PasswordChange = e => {
    console.log(e);
    this.setState({ password: e.target.value });
  };

  render() {
    // 样式
    const styleCss = {
      bgc: {
        background:
          'url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558084825727&di=aec812e3d6ac81e4c94f8ca256f1973b&imgtype=0&src=http%3A%2F%2Fimg.jdzj.com%2FUserDocument%2F2015b%2Fyunqiweiyi%2FPicture%2F20159161847.jpg") no-repeat',
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
        position: "fixed"
      },
      box: {
        width: "450px",
        // height: '550px',
        paddingBottom: "40px",
        border: "1px solid gary",
        margin: "200px auto",
        boxSizing: "border-box",
        background: "white",
        textAlign: "center"
      },
      dl: {
        lineHeight: "80px",
        marginTop: "20px"
      },
      boxBorder: {
        margin: "0 50px"
      },
      abox: {
        margin: "-15px 0 25px 0"
      },
      mar: {
        marginRight: "250px"
      }
    };
    return (
      <div style={styleCss.bgc}>
        <div style={styleCss.box}>
          <h2 style={styleCss.dl}>登陆</h2>

          <Form
            style={styleCss.boxBorder}
            onSubmit={this.handleLogin}
            className="login-form"
          >
            <Form.Item>
              <Input
                onChange={this.nameChange}
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
                value={this.state.username}
              />
            </Form.Item>
            <Form.Item>
              <Input
                onChange={this.PasswordChange}
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Password"
                value={this.state.password}
                type="password"
              />
            </Form.Item>
            <div style={styleCss.abox}>
              <a style={styleCss.mar}>忘记密码</a> <a>注册</a>
            </div>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              登陆
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.object
};

export default Login;
