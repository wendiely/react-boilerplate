import React from "react";
import PropTypes from "prop-types";
import {
  Form,
  Input,
  DatePicker,
  InputNumber,
  Cascader,
  // Select,
  Button
  // AutoComplete
} from "antd";
import axios from "axios";
import moment from "moment"; // antd日期选择器的日期格式

// const { Option } = Select;
// const AutoCompleteOption = AutoComplete.Option;
// 自定义级联选择器的选择范围（城市选择）
const residences = [
  {
    value: "浙江",
    label: "浙江",
    children: [
      {
        value: "杭州",
        label: "杭州"
      }
    ]
  },
  {
    value: "江苏",
    label: "江苏",
    children: [
      {
        value: "南京",
        label: "南京",
        children: [
          {
            value: "秦淮",
            label: "秦淮"
          }
        ]
      },
      {
        value: "无锡",
        label: "无锡",
        children: [
          {
            value: "锡山",
            label: "锡山"
          }
        ]
      }
    ]
  }
];

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
      console.log(this.state.detail, this.props.location.state.detail);
    }
  }

  //   表单提交
  handleSubmit = e => {
    // e.preventDefault();
    console.log("点击之后", e, this.state.detail);
    // eslint-disable-next-line react/prop-types
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        values.birthday = moment(values.birthday).format("YYYY-MM-DD"); // 修改时间选择器获得的时间的格式
        console.log(
          "Received values of form: ",
          values,
          moment(values.birthday).format("YYYY-MM-DD")
        );
        if (this.props.location.state === undefined) {
          console.log("新增");
          axios.post("/customerListAdd", values).then(res => {
            console.log("mock返回数据put POST", res);
            history.go(-1);
          });
        } else {
          console.log("编辑");
          values["id"] = this.state.detail.id;
          axios.put("/customerList", values).then(res => {
            console.log("dfs", this.props);
            console.log("mock返回数据put Put", res);
            history.go(-1);
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
    // const { autoCompleteResult } = this.state;
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
          {this.state.detail.id}
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

        <Form.Item label="年收入/w" {...FormItemLayoutDetail}>
          {getFieldDecorator("age", {
            initialValue: this.state.detail.age,
            rules: [
              {
                type: "number",
                required: false,
                message: "请填写年收入",
                min: 0
              }
            ]
          })(<InputNumber placeholder="年收入" />)}
        </Form.Item>
        <Form.Item label="生日" {...FormItemLayoutDetail}>
          {getFieldDecorator("birthday", {
            rules: [
              {
                type: "object",
                required: true,
                message: "Please select time!"
              }
            ],
            initialValue:
              this.props.location.state !== undefined
                ? moment(this.state.detail.birthday, "YYYY-MM-DD")
                : null
          })(<DatePicker />)}
        </Form.Item>
        <Form.Item label="居住城市" {...FormItemLayoutDetail}>
          {getFieldDecorator("city", {
            setFieldsValue:
              this.props.location.state !== undefined
                ? this.props.location.state.detail.city
                : ["浙江", "杭州"],
            // initialValue: this.props.location.state !== undefined ? this.props.location.state.detail.city : ['浙江', '杭州'],
            rules: [
              { type: "array", required: true, message: "请填写居住城市" }
            ]
          })(<Cascader options={residences} placeholder="请选择城市" />)}
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
