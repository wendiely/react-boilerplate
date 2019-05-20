import React from "react";
import { Table, Divider, Tag } from "antd";
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
      list: []
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
        title: "Name",
        dataIndex: "name",
        key: "name",
        render: text => <a href="javascript:;">{text}</a>
      },
      {
        title: "Age",
        dataIndex: "age",
        key: "age"
      },
      {
        title: "Address",
        dataIndex: "address",
        key: "address"
      },
      {
        title: "Tags",
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
        title: "Action",
        key: "action",
        render: (text, record) => (
          <span>
            <a href="javascript:;">Invite {record.name}</a>
            <Divider type="vertical" />
            <a href="javascript:;">Delete</a>
          </span>
        )
      }
    ];

    return (
      <div style={styleCss.table}>
        <h2>商品列表 </h2>
        <Table columns={columns} dataSource={this.state.list} />
      </div>
    );
  }
}

ShopList.propTypes = {
  history: PropTypes.object
};
export default ShopList;
