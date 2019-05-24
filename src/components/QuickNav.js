import React from "react";
import PropTypes from "prop-types";
import { Breadcrumb } from "antd";

class QuickNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Application Center</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Application List</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>An Application</Breadcrumb.Item>
      </Breadcrumb>
    );
  }
}

QuickNav.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.any
};

export default QuickNav;
