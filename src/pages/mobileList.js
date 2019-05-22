import React from "react";
import { layout } from "antd";

class mobileList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log("出现了,我是手机的界面,我会做一个富文本", this.props);
  }
  render() {
    return (
      <div>
        <layout>ddddd</layout>
      </div>
    );
  }
}

export default mobileList;
