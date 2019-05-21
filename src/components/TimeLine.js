import React from "react";
import { Timeline, Icon } from "antd";

const one = e => {
  return (
    <Timeline mode="right">
      <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
      <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
      <Timeline.Item
        dot={<Icon type="clock-circle-o" style={{ fontSize: "16px" }} />}
        color="red"
      >
        Technical testing 2015-09-01
      </Timeline.Item>
      <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
    </Timeline>
  );
};

const two = e => {
  return (
    <Timeline mode="alternate">
      <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
      <Timeline.Item color="green">
        Solve initial network problems 2015-09-01
      </Timeline.Item>
      <Timeline.Item
        dot={<Icon type="clock-circle-o" style={{ fontSize: "16px" }} />}
      >
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.
      </Timeline.Item>
      <Timeline.Item color="red">
        Network problems being solved 2015-09-01
      </Timeline.Item>
      <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
      <Timeline.Item
        dot={<Icon type="clock-circle-o" style={{ fontSize: "16px" }} />}
      >
        Technical testing 2015-09-01
      </Timeline.Item>
    </Timeline>
  );
};

class TimeLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return one();
  }
}
export default TimeLine;
