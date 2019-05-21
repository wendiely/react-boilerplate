import React from "react";
import {
  Table,
  Divider,
  Tag,
  Modal,
  Form,
  Input,
  Button,
  Radio,
  Checkbox,
  Tooltip,
  Icon,
  Cascader,
  InputNumber
} from "antd";
import axios from "axios";
import PropTypes from "prop-types";

// 在这里定义modal框里的表单
const CollectionCreateForm = Form.create({ name: "formInModal" })(
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        tags: ["NICE", "LOSER"],
        inputVisible: false,
        inputValue: ""
      };
    }
    handleClose = removedTag => {
      const tags = this.state.tags.filter(tag => tag !== removedTag);
      console.log(tags);
      this.setState({ tags });
    };
    // 点击，添加输入框显现
    showInput = () => {
      console.log("输入框显现");
      this.setState({ inputVisible: true }, () => this.input.focus());
    };

    handleInputChange = e => {
      console.log("输入框内容改变");
      this.setState({ inputValue: e.target.value });
    };

    handleInputConfirm = () => {
      const { inputValue } = this.state;
      let { tags } = this.state;
      if (inputValue && tags.indexOf(inputValue) === -1) {
        tags = [...tags, inputValue];
      }
      console.log("确认改变内容", tags);
      this.setState({
        tags,
        inputVisible: false,
        inputValue: ""
      });
    };
    // ref属性用于获取真实的节点
    saveInputRef = input => (this.input = input);

    render() {
      // eslint-disable-next-line react/prop-types
      const {
        onChange,
        visible,
        onCancel,
        onCreate,
        form,
        detail
      } = this.props;
      const { getFieldDecorator } = form;
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 4 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 }
        }
      };
      // // 给tags赋值
      // let tags = []
      // if (detail.tags !== undefined) {
      //   tags = [...detail.tags];
      //   console.log('dddddddddddddddtags', detail.tags, [...detail.tags])
      // }
      // this.setState({tags: [...this.props.detail.tags]})

      // 自定义级联选择器的选择范围（城市选择）
      const options = [
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
      const { tags, inputVisible, inputValue } = this.state;
      return (
        <Modal
          visible={visible}
          title="编辑商品信息"
          okText="保存"
          onCancel={onCancel}
          onOk={onCreate}
        >
          {/* layout="vertical" */}
          <Form {...formItemLayout}>
            <Form.Item label="商品名称">
              {getFieldDecorator("name", {
                rules: [{ required: true, message: "请填写商品名称" }],
                initialValue: detail.name
              })(<Input />)}
            </Form.Item>
            <Form.Item label="库存">
              {getFieldDecorator("age", {
                rules: [{ required: true, message: "请填写商品库存" }],
                initialValue: detail.age
              })(<InputNumber min={0} />)}
            </Form.Item>
            <Form.Item label="产地">
              {getFieldDecorator("address", {
                defaultValue: detail.address
              })(<Cascader options={options} onChange={onChange} />)}
            </Form.Item>

            <Form.Item label="标签">
              {tags.map((tag, index) => {
                // 太长的tag文字显示省略号
                const isLongTag = tag.length > 10;
                const tagElem = (
                  <Tag
                    key={tag}
                    closable={index !== -1}
                    onClose={() => this.handleClose(tag)}
                  >
                    {isLongTag ? `${tag.slice(0, 10)}...` : tag}
                  </Tag>
                );
                return isLongTag ? (
                  <Tooltip title={tag} key={tag}>
                    {tagElem}
                  </Tooltip>
                ) : (
                  tagElem
                );
              })}
              {inputVisible && (
                <Input
                  ref={this.saveInputRef}
                  type="text"
                  size="small"
                  style={{ width: 78 }}
                  value={inputValue}
                  onChange={this.handleInputChange}
                  onBlur={this.handleInputConfirm}
                  onPressEnter={this.handleInputConfirm}
                />
              )}
              {!inputVisible && (
                <Tag
                  onClick={this.showInput}
                  style={{ background: "#fff", borderStyle: "dashed" }}
                >
                  <Icon type="plus" /> New Tag
                </Tag>
              )}
            </Form.Item>

            <Form.Item className="collection-create-form_last-form-item">
              {getFieldDecorator("modifier", {
                initialValue: "public"
              })(
                <Radio.Group>
                  <Radio value="public">上架</Radio>
                  <Radio value="private">暂存</Radio>
                </Radio.Group>
              )}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);

class ShopList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      visible: false,
      defDetail: {}
    };
  }
  // eslint-disable-next-line react/no-deprecated
  componentWillMount() {
    console.log("可能没啥用yuiop");
  }
  componentDidMount() {
    console.log("hahhahhshopList", this.props);
    // eslint-disable-next-line react/prop-types
    const pathname = this.props.location.pathname;
    if (pathname === "/shopList") {
      console.log(1111);
      axios.get("/shopList").then(res => {
        console.log("mock返回数据", res.data.mocktest);
        this.setState({ list: res.data.mocktest });
      });
    }
  }

  // 显现modal框
  Bj(e) {
    this.setState({
      visible: true,
      defDetail: e
    });
    console.log("eeeeeeeee", e, this.state.visible);
  }
  handleOk = e => {
    console.log("保存", e);
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log("Received values of form: ", values);
      form.resetFields();
      this.setState({ visible: false });
    });
  };
  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  handleCancel = e => {
    console.log("取消", e);
    this.setState({
      visible: false
    });
  };
  onChange = e => {
    console.log("地点选择框", e);
  };

  render() {
    // const { getFieldDecorator } = this.props.Form;
    const styleCss = {
      table: {
        // padding: "0 50px",
        // boxSizing: "border-box",
        // marginTop: 50
      }
    };

    const columns = [
      {
        title: "商品名称",
        dataIndex: "name",
        key: "name",
        render: text => <a href="javascript:;">{text}</a>
      },
      {
        title: "库存/件",
        dataIndex: "age",
        key: "age"
      },
      {
        title: "产地",
        dataIndex: "address",
        key: "address"
      },
      {
        title: "标签",
        key: "tags",
        dataIndex: "tags",
        render: tags => (
          <span>
            {tags.map(tag => {
              let color = tag.length > 5 ? "geekblue" : "green";
              if (tag === "loser") {
                color = "volcano";
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </span>
        )
      },
      {
        title: "操作",
        key: "action",
        render: (text, record) => (
          <span>
            <a href="javascript:;">Invite {record.name}</a>
            <Divider type="vertical" />
            <a
              href="javascript:;"
              onClick={() => {
                this.Bj(record);
              }}
            >
              编辑
            </a>
            <Divider type="vertical" />
            <a href="javascript:;">删除</a>
          </span>
        )
      }
    ];

    return (
      <div style={styleCss.table}>
        <h2>商品列表 </h2>
        <Table columns={columns} dataSource={this.state.list} />
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleOk}
          onChange={this.onChange}
          detail={this.state.defDetail}
        />

        {/* <Modal
          title="编辑商品详情"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form layout="horizontal" onSubmit={this.handleSubmit}>
            <Form.Item>
              {getFieldDecorator("name", {
                rules: [
                  {
                    required: true,
                    message: "Please input your name"
                  }
                ]
              })(<Input placeholder="Please input your name" />)}
            </Form.Item>
            <Form.Item />
          </Form>
        </Modal> */}
      </div>
    );
  }
}

ShopList.propTypes = {
  history: PropTypes.object,
  form: PropTypes.object
};
export default ShopList;
