import React from "react";
import { Collapse, Icon, Tag, Pagination, Avatar } from "antd";
import PropTypes from "prop-types";
const Panel = Collapse.Panel;

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
            {this.props.data.new.map(e => {
              return (
                <Tag key={e} color="green">
                  {e}
                </Tag>
              );
            })}
          </Panel>
          <Panel header="今日迟到" key="2" style={customPanelStyle}>
            {this.props.data.cd.map(e => {
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
        <div>
          <Collapse
            accordion
            bordered={false}
            expandIcon={({ isActive }) => (
              <Icon type="caret-right" rotate={isActive ? 90 : 0} />
            )}
          >
            {this.props.list.map(e => {
              return (
                <Panel
                  header={e.title}
                  key={e.id}
                  style={customPanelStyle}
                  extra={genExtra()}
                >
                  <p>{e.content}</p>
                  <p>
                    发布人： <Avatar src={e.urlImg} />
                  </p>
                  <a href={e.url} target="_top" rel="help">
                    查看详情
                  </a>
                </Panel>
              );
            })}
          </Collapse>
          <Pagination
            // pageSizeOptions= {['5', '10', '15', '20', '30', '50']}
            showSizeChanger
            onShowSizeChange={this.props.onChange}
            onChange={this.props.onChange}
            defaultCurrent={1}
            total={this.props.total}
          />
        </div>
      );
    }
  }
}

CollapseCom.propTypes = {
  content: PropTypes.string,
  data: PropTypes.object,
  list: PropTypes.array,
  onChange: PropTypes.func,
  // EachPage: PropTypes.func,
  total: PropTypes.number
};

export default CollapseCom;
