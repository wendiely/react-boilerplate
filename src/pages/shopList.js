import React from "react";
import {
  Table,
  Divider,
  Tag,
  Modal,
  Form,
  Input,
  Button,
  Checkbox
} from "antd";
import axios from "axios";
import PropTypes from "prop-types";

// const columns = [{
//   title: 'Name',
//   dataIndex: 'name',
//   key: 'name',
//   render: text => <a href="javascript:;">{text}</a>,
// }, {
//   title: 'Age',
//   dataIndex: 'age',
//   key: 'age',
// }, {
//   title: 'Address',
//   dataIndex: 'address',
//   key: 'address',
// }, {
//   title: 'Tags',
//   key: 'tags',
//   dataIndex: 'tags',
//   render: tags => (
//     <span>
//       {tags.map(tag => {
//         let color = tag.length > 5 ? 'geekblue' : 'green';
//         if (tag === 'loser') {
//           color = 'volcano';
//         }
//         return <Tag color={color} key={tag}>{tag.toUpperCase()}</Tag>;
//       })}
//     </span>
//   ),
// }, {
//   title: 'Action',
//   key: 'action',
//   render: (text, record) => (
//     <span>
//       <a href="javascript:;">Invite {record.name}</a>
//       <Divider type="vertical" />
//       <a href="javascript:;">Delete</a>
//     </span>
//   ),
// }];

// componentDidMount => {
//   if (this.props.location.pathname === '/shopList') {
//     console.log(1111)
//     axios.get('/shopList').then(res => {
//       console.log('mock返回数据', res.data.mocktest)
//       this.setState({ list: res.data.mocktest });
//     })

//   }
// }
// const ShopList = props => {
//   this.componentDidMount()
//   return (
//     <div style={{ marginTop: 100 }}>
//       <h2>商品列表</h2>
//       <Table columns={columns} dataSource={this.list} />
//     </div>
//   );
// };

// export default ShopList;

class ShopList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      visible: false,
      defDetail: {}
    };
  }
  componentDidMount() {
    console.log("hahhahhshopList", this.props);
    // eslint-disable-next-line react/prop-types
    // const pathname = this.props.location.pathname;
    // if (pathname === "/shopList") {
    console.log(1111);
    axios.get("/shopList").then(res => {
      console.log("mock返回数据", res.data.mocktest);
      this.setState({ list: res.data.mocktest });
    });
    // }
  }

  Bj(e) {
    console.log("eeeeeeeee", e);
    this.setState({
      visible: true,
      defDetail: e
    });
  }
  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
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
    const { getFieldDecorator } = this.props.form;

    return (
      <div style={styleCss.table}>
        <h2>商品列表 </h2>
        <Table columns={columns} dataSource={this.state.list} />
        <Modal
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
        </Modal>
      </div>
    );
  }
}

ShopList.propTypes = {
  history: PropTypes.object
};
export default ShopList;
