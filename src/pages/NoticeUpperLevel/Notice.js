import React from "react";
import { Collapse } from "antd";
import DemoApi from "../../api/index";
const Panel = Collapse.Panel;

import CollapseCom from "../../components/CollapseCom";

class Notice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        new: ["小白龙", "轩源", "玲玲", "霖轩"],
        cd: ["よい方", "軒の源", "ソース", "高く険しい雨"]
      },
      list: [],
      page: 1,
      pageSize: 10,
      total: 0
    };
  }
  componentDidMount() {
    const val = {
      page: this.state.page,
      pageSize: this.state.pageSize
    };
    DemoApi.Notice(val).then(res => {
      console.log("我是首页信息接口", res);
      this.setState({ list: res.data.list, total: res.data.total });
    });
  }
  // 分页改变，重新获取列表数据
  onChange = (page, pageSize) => {
    console.log("sizechng", page, pageSize);
    const val = {
      page: page,
      pageSize: pageSize
    };
    DemoApi.Notice(val).then(res => {
      console.log("我是首页信息接口", res);
      this.setState({ list: res.data.list, total: res.data.total });
    });
  };

  callback = e => {
    console.log("面板更换", e);
  };
  render() {
    const customPanelStyle = {
      //   background: "#f7f7f7",
      //   borderRadius: 4,
      marginBottom: 24,
      border: 0,
      overflow: "hidden"
    };
    return (
      <Collapse
        bordered={false}
        defaultActiveKey={["0", "1"]}
        onChange={this.callback}
      >
        <Panel
          header="考勤信息"
          showArrow={false}
          key="0"
          style={customPanelStyle}
          disabled
        >
          <CollapseCom data={this.state.data} content="考勤" />
        </Panel>
        <Panel
          header="公告信息"
          showArrow={false}
          key="1"
          style={customPanelStyle}
          disabled
        >
          <CollapseCom
            total={this.state.total}
            onChange={this.onChange}
            list={this.state.list}
            content="公告"
          />
        </Panel>
      </Collapse>
    );
  }
}
export default Notice;
