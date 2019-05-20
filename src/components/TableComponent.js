import React from "react";
import PropTypes from "prop-types";
import { Table, Divider } from "antd";

class TableComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const columns = [
      {
        title: "编号",
        dataIndex: "id",
        key: "id"
      },
      {
        title: "商品图片",
        dataIndex: "urlImg",
        key: "urlImg",
        render: (text, record) => (
          <span>
            <img
              style={{ width: "40px", height: "40px" }}
              src={record.urlImg}
            />
          </span>
        )
      },
      {
        title: "商品名称",
        dataIndex: "ctitle",
        key: "ctitle"
      },
      {
        title: "销售数量",
        dataIndex: "num",
        key: "num"
      },
      {
        title: "操作",
        key: "action",
        render: (text, record) => (
          <span>
            {/* <a href="javascript:;">编辑</a> */}
            <a onClick={() => this.props.editor(record)}>编辑</a>
            <Divider type="vertical" />
            <a onClick={() => this.props.delete(record)}>删除</a>
          </span>
        )
      }
    ];
    return (
      <div className="table">
        <Table columns={columns} dataSource={this.props.comment} />
      </div>
    );
  }
}

TableComponent.propTypes = {
  delete: PropTypes.func,
  children: PropTypes.any,
  comment: PropTypes.array
};

export default TableComponent;
