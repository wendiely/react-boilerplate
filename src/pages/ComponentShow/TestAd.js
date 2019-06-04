import React from "react";
import TagBox from "../../components/tags";
import TimeLine from "../../components/TimeLine";
import Tree from "../../components/Tree";
import UploadPhoto from "../../components/UploadPhoto";
import ImageLazyLoad from "../../components/ImageLazyLoad";
import { Card } from "antd";

// eslint-disable-next-line react/prefer-stateless-function
class TestAd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [
        "https://images.pexels.com/photos/39493/animals-cat-girl-happiness-39493.jpeg?auto=compress&cs=tinysrgb",
        "https://images.pexels.com/photos/271955/pexels-photo-271955.jpeg?auto=compress&cs=tinysrgb",
        "https://images.pexels.com/photos/22346/pexels-photo.jpg?auto=compress&cs=tinysrgb",
        "https://images.pexels.com/photos/115011/cat-face-close-view-115011.jpeg?auto=compress&cs=tinysrgb",
        "https://images.pexels.com/photos/46024/pexels-photo-46024.jpeg?auto=compress&cs=tinysrgb",
        "https://images.pexels.com/photos/56857/animal-cat-kitten-funny-56857.jpeg?auto=compress&cs=tinysrgb",
        "https://images.pexels.com/photos/156934/pexels-photo-156934.jpeg?auto=compress&cs=tinysrgb",
        "https://images.pexels.com/photos/982865/pexels-photo-982865.jpeg?auto=compress&cs=tinysrgb",
        "https://images.pexels.com/photos/69932/tabby-cat-close-up-portrait-69932.jpeg?auto=compress&cs=tinysrgb",
        "https://images.pexels.com/photos/691583/pexels-photo-691583.jpeg?auto=compress&cs=tinysrgb",
        "https://images.pexels.com/photos/80363/cat-balcony-surprised-look-80363.jpeg?auto=compress&cs=tinysrgb",
        "https://images.pexels.com/photos/66292/cat-eyes-view-face-66292.jpeg?auto=compress&cs=tinysrgb",
        "https://images.pexels.com/photos/1038914/pexels-photo-1038914.jpeg?auto=compress&cs=tinysrgb",
        "https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&cs=tinysrgb",
        "https://images.pexels.com/photos/248280/pexels-photo-248280.jpeg?auto=compress&cs=tinysrgb",
        "https://images.pexels.com/photos/1049758/pexels-photo-1049758.jpeg?auto=compress&cs=tinysrgb",
        "https://images.pexels.com/photos/730896/pexels-photo-730896.jpeg?auto=compress&cs=tinysrgb",
        "https://images.pexels.com/photos/257532/pexels-photo-257532.jpeg?auto=compress&cs=tinysrgb",
        "https://images.pexels.com/photos/62640/pexels-photo-62640.jpeg?auto=compress&cs=tinysrgb",
        "https://images.pexels.com/photos/38867/pexels-photo-38867.jpeg?auto=compress&cs=tinysrgb",
        "https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb",
        "https://images.pexels.com/photos/774731/pexels-photo-774731.jpeg?auto=compress&cs=tinysrgb",
        "https://images.pexels.com/photos/693651/pexels-photo-693651.jpeg?auto=compress&cs=tinysrgb",
        "https://images.pexels.com/photos/39255/cat-favorite-relaxation-rest-39255.jpeg?auto=compress&cs=tinysrgb",
        "https://images.pexels.com/photos/674577/pexels-photo-674577.jpeg?auto=compress&cs=tinysrgb",
        "https://images.pexels.com/photos/70769/pexels-photo-70769.jpeg?auto=compress&cs=tinysrgb",
        "https://images.pexels.com/photos/434033/pexels-photo-434033.jpeg?auto=compress&cs=tinysrgb",
        "https://images.pexels.com/photos/735423/pexels-photo-735423.jpeg?auto=compress&cs=tinysrgb",
        "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb",
        "https://images.pexels.com/photos/326875/pexels-photo-326875.jpeg?auto=compress&cs=tinysrgb",
        "https://images.pexels.com/photos/209037/pexels-photo-209037.jpeg?auto=compress&cs=tinysrgb"
      ]
    };
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
        <Card.Grid style={gridBigStyle}>
          <h1>测一下图片懒加载</h1>
          <ImageLazyLoad datasource={this.state.dataSource} />
        </Card.Grid>
      </Card>
    );
  }
}

export default TestAd;
