import React from "react";
import { Collapse, Icon, Tag } from "antd";
import PropTypes from "prop-types";
const Panel = Collapse.Panel;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const genExtra = () => (
  <Icon
    type="setting"
    onClick={event => {
      console.log("笑容日渐猖狂", event);
      // If you don't want click extra trigger collapse, you can prevent this:
      event.stopPropagation(); // 可阻止折叠面板打开
    }}
  />
);

class CollapseCom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const customPanelStyle = {
      // background: "#f7f7f7",
      borderRadius: 4,
      marginBottom: 24,
      border: "1px solid #eee",
      overflow: "hidden"
    };
    if (this.props.content === "考勤") {
      return (
        <Collapse
          bordered={false}
          expandIcon={({ isActive }) => (
            <Icon type="caret-right" rotate={isActive ? 90 : 0} />
          )}
        >
          <Panel header="新员工" key="1" style={customPanelStyle}>
            {this.props.data.map(e => {
              return (
                <Tag key={e} color="green">
                  {e}
                </Tag>
              );
            })}
          </Panel>
          <Panel header="今日迟到" key="2" style={customPanelStyle}>
            {this.props.data.map(e => {
              return (
                <Tag key={e} color="red">
                  {e}
                </Tag>
              );
            })}
          </Panel>
        </Collapse>
      );
    } else if (this.props.content === "公告") {
      return (
        <Collapse
          accordion
          bordered={false}
          expandIcon={({ isActive }) => (
            <Icon type="caret-right" rotate={isActive ? 90 : 0} />
          )}
        >
          <Panel
            header="This is panel header 2"
            key="1"
            style={customPanelStyle}
            extra={genExtra()}
          >
            <p>{text}</p>
          </Panel>
          <Panel
            header="This is panel header 2"
            key="2"
            style={customPanelStyle}
          >
            <p>{text}</p>
          </Panel>
          <Panel
            header="This is panel header 3"
            key="3"
            style={customPanelStyle}
          >
            <p>{text}</p>
          </Panel>
        </Collapse>
      );
    }
  }
}

CollapseCom.propTypes = {
  content: PropTypes.string,
  data: PropTypes.array
};

export default CollapseCom;
