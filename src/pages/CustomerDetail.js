import React from "react";
import PropTypes from "prop-types";
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete
} from "antd";
import axios from "axios";

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

class CustomerDetail extends React.Component {
  constructor(props) {
    console.log("我的详情", props);
    super(props);
    this.state = {
      detail: {},
      confirmDirty: false,
      autoCompleteResult: []
    };

    // this.handleSubmit = this.handleSubmit.bind(this)
  }
  // 组件挂载到dom后调用， 仅一次
  componentDidMount() {
    console.log("详情页加载吗？", this.props);
    // this.props.location.query.state.detail
    if (this.props.location.state === undefined) {
      // this.props.history.push("/customerList")
      // this.setState({ detail: {} });
    } else {
      console.log("2222222详情页加载吗？", this.props);
      this.setState({ detail: this.props.location.state.detail });
    }
  }

  //   表单提交
  handleSubmit = e => {
    // e.preventDefault();
    console.log("点击之后", e, this.state.detail);
    // eslint-disable-next-line react/prop-types
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        if (this.props.location.state === undefined) {
          axios.put("/customerList", values).then(res => {
            console.log("mock返回数据put Put", res);
            this.props.location.history(-1);
          });
          // axios.put("/customerList", { id: item.id }).then(res => {
          //   console.log("删除操作返回mock数据", res.data.data);
          //   this.setState({ list: res.data.data });
          // });
        } else {
          // axios.get("/customerList").then(res => {
          //   console.log("mock返回数据", res);
          //   this.setState({ list: res.data.data });
          // });
          axios.put("/customerList", values).then(res => {
            console.log("mock返回数据put Put", res);
            this.props.location.history(-1);
          });
        }
      }
    });
  };
  // 表单内数据自定义校验（手机号时)
  validFunction = (rule, value, callback) => {
    console.log(7890, value);
    if (!value) {
      callback("请输入手机号valid"); // 框内数据为空时报错
    }
    const RGE = /^1[385][1-9]\d{8}/;
    if (!RGE.test(value)) {
      callback("请输入正确的手机号"); // 正则校验未通过
    }
    callback(); // 校验通过
  };

  render() {
    // eslint-disable-next-line react/prop-types
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;
    // 按钮
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 12,
          offset: 10
        }
      }
    };
    // Form-item的样式
    const FormItemLayoutDetail = {
      wrapperCol: {
        xs: {
          span: 18,
          offset: 0
        },
        sm: {
          span: 12,
          offset: 0
        }
      }
    };
    // Form的样式
    const formItemLayout = {
      labelCol: {
        xs: { span: 12 },
        sm: { span: 6 }
      },
      wrapperCol: {
        xs: { span: 12 },
        sm: { span: 12 }
      }
    };
    let idDom = null;
    if (this.state.detail.id !== undefined) {
      idDom = (
        <Form.Item label="编号" {...FormItemLayoutDetail}>
          {getFieldDecorator("id", {
            initialValue: this.state.detail.id
          })(<div />)}
        </Form.Item>
      );
    }

    return (
      <Form {...formItemLayout} onSubmit={() => this.handleSubmit()}>
        {idDom}

        <Form.Item label="姓名" {...FormItemLayoutDetail}>
          {getFieldDecorator("name", {
            rules: [
              {
                required: true,
                message: "请输入姓名"
              }
            ],
            initialValue: this.state.detail.name
          })(<Input placeholder="请输入姓名" />)}
        </Form.Item>
        <Form.Item label="手机号" {...FormItemLayoutDetail}>
          {getFieldDecorator("phone", {
            rules: [
              {
                required: true,
                message: "请输入手机号"
              },
              //   {
              //     message:'请输入正确的手机号',
              //     pattern: /^1[385][1-9]\d{8}/ // 正则验证
              //   },
              {
                validator: this.validFunction // 自定义验证
              }
            ],
            initialValue: this.state.detail.phone
          })(<Input placeholder="请输入电话号吗" />)}
        </Form.Item>
        <Form.Item label="邮箱" {...FormItemLayoutDetail}>
          {getFieldDecorator("email", {
            rules: [
              {
                type: "email",
                message: "请输入正确的邮箱!"
              },
              {
                required: true,
                message: "请输入邮箱!"
              }
            ],
            initialValue: this.state.detail.email
          })(<Input placeholder="请添加邮箱" />)}
        </Form.Item>

        <Form.Item label="年龄" {...FormItemLayoutDetail}>
          <Input placeholder="Basic usage" value={this.state.detail.age} />
        </Form.Item>
        <Form.Item label="生日" {...FormItemLayoutDetail}>
          <Input placeholder="Basic usage" value={this.state.detail.birthday} />
        </Form.Item>
        <Form.Item label="居住城市" {...FormItemLayoutDetail}>
          <Input placeholder="Basic usage" value={this.state.detail.city} />
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
// Form.create(options)
// eslint-disable-next-line no-class-assign
CustomerDetail = Form.create({ name: "people" })(CustomerDetail);

CustomerDetail.propTypes = {
  location: PropTypes.object,
  history: PropTypes.object
};

export default CustomerDetail;
