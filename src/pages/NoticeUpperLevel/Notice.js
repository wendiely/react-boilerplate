import React from "react";
import { Collapse } from "antd";
const Panel = Collapse.Panel;

import CollapseCom from "../../components/CollapseCom";

class Notice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ["小白龙", "轩源", "玲玲", "霖轩"]
    };
  }
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
          <CollapseCom content="公告" />
        </Panel>
      </Collapse>
    );
  }
}
export default Notice;
