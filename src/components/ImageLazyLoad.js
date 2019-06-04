import React from "react";
import Lazyload from "react-lazyload";
import { PropTypes } from "prop-types";
import { Card } from "antd";

class ImageLazyLoad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        style={{ background: "#ECECEC", padding: "30px", overflow: "hidden" }}
      >
        {this.props.datasource.map((e, index) => {
          return (
            <Lazyload key={e}>
              <Card
                title={"Name is " + index + " cat"}
                bordered={false}
                style={{ float: "left", margin: "0 10px 10px 0" }}
              >
                <img style={{ width: 185 }} src={e} />
              </Card>
            </Lazyload>
          );
        })}
      </div>
    );
  }
}
ImageLazyLoad.propTypes = {
  datasource: PropTypes.array
};

export default ImageLazyLoad;
