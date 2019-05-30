import React from "react";
import TagBox from "../../components/tags";
import TimeLine from "../../components/TimeLine";
import Tree from "../../components/Tree";
import UploadPhoto from "../../components/UploadPhoto";
import { Card } from "antd";

// eslint-disable-next-line react/prefer-stateless-function
class TestAd extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const gridStyle = {
      width: "25%",
      textAlign: "center",
      background: "#fff"
    };
    const gridBigStyle = {
      width: "50%",
      textAlign: "center",
      background: "#fff"
    };
    return (
      <Card title="all kinds of component" style={{ background: "#fbf1fc" }}>
        <Card.Grid style={gridStyle}>
          <h1>Tag</h1>
          <TagBox />
        </Card.Grid>
        <Card.Grid style={gridStyle}>
          <h1>TimeLine</h1>
          <TimeLine />
        </Card.Grid>
        <Card.Grid style={gridStyle}>
          <h1>树型结构</h1>
          <Tree />
        </Card.Grid>
        <Card.Grid style={gridStyle}>
          <h1>结构</h1>
          <Tree />
        </Card.Grid>
        <Card.Grid style={gridBigStyle}>
          <h1>一面照片墙</h1>
          {/* <UploadPhoto /> */}
        </Card.Grid>
      </Card>
    );
  }
}

export default TestAd;
