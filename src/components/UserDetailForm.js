import { Form, Row, Col, Input, Button, message } from "antd";

import React from "react";
//   import ReactDOM from "react-dom"

class AdvancedSearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: false
    };
    console.log(33333333333333, this.props);
  }

  //   // To generate mock Form.Item
  //   getFields() {
  //     //   const count = this.state.expand ? 10 : 6;
  //     //   const count = 2
  //     // eslint-disable-next-line react/prop-types
  //     const { getFieldDecorator } = this.props.form;
  //     const children = [];
  //     //   for (let i = 0; i < 10; i++) {
  //     children.push(
  //       <Col span={8} key="0">
  //         <Form.Item label="姓名">
  //           {getFieldDecorator("name", {
  //             rules: []
  //           })(
  //             // eslint-disable-next-line react/prop-types
  //             <Input placeholder={this.props.comment.name} />
  //           )}
  //         </Form.Item>
  //         <Form.Item label="电话">
  //           {getFieldDecorator("phone", {
  //             rules: [
  //               {
  //                 message: "请输入正确的手机号",
  //                 pattern: /^1[385][1-9]\d{8}/ // 正则验证
  //               }
  //             ]
  //           })(
  //             // eslint-disable-next-line react/prop-types
  //             <Input placeholder={this.props.comment.phone} />
  //           )}
  //         </Form.Item>
  //       </Col>
  //     );
  //     //   }
  //     return children;
  //   }
  //   // 搜索
  //   handleSearch = e => {
  //     e.preventDefault();
  //     // eslint-disable-next-line react/prop-types
  //     this.props.form.validateFields((err, values) => {
  //       console.log("Received values of form: ", values);
  //       if (values.name === undefined && values.phone === undefined) {
  //         message.info("请输入条件搜索"); // 全局提示
  //       } else {
  //         // eslint-disable-next-line react/prop-types
  //         this.props.search(values);
  //       }
  //     });
  //   };

  //   handleReset = () => {
  //     // eslint-disable-next-line react/prop-types
  //     this.props.form.resetFields();
  //     message.success("我重置啦！");
  //   };

  // toggle = () => {
  //   const { expand } = this.state;
  //   this.setState({ expand: !expand });
  // }

  render() {
    const formItemLayout = {};
    // eslint-disable-next-line react/prop-types
    const { getFieldDecorator } = this.props.form;
    const FormItem = () => {
      return (
        <Form.Item {...formItemLayout} label="Name">
          {getFieldDecorator("username", {
            rules: [
              {
                required: true,
                message: "Please input your name"
              }
            ]
          })(<Input placeholder="Please input your name" />)}
        </Form.Item>
      );
    };
    return (
      <div>
        <FormItem> </FormItem>
      </div>
      //   <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
      //     <Row gutter={24}>{this.getFields()}</Row>
      //     <Row>
      //       <Col span={24} style={{ textAlign: "right" }}>
      //         <Button type="primary" htmlType="submit">
      //           Search
      //         </Button>
      //         <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
      //           Clear
      //         </Button>
      //         {/* <a style={{ marginLeft: 8, fontSize: 12 }} onClick={this.toggle}>
      //             Collapse <Icon type={this.state.expand ? 'up' : 'down'} />
      //           </a> */}
      //       </Col>
      //     </Row>
      //   </Form>
    );
  }
}

const WrappedAdvancedSearchForm = Form.create({ name: "UserDetailform" })(
  AdvancedSearchForm
);

export default WrappedAdvancedSearchForm;
