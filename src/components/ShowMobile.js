import React from "react";
import { Carousel } from "antd";
// import '../styles/mobile.less'

class ShowMobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("手机部分传过来的数组", this.props);
  }
  componentDidMount() {
    console.log("组件启动");
  }

  render() {
    const styleCss = {
      Arbox: {
        // background:'red',
      },
      Box: {
        // background:'pink',
        width: "375px",
        height: "667px",
        margin: "0 auto",
        border: "1px solid #eee",
        borderRadius: "10px"
      },
      Banner: {
        width: "375px",
        height: "375px"
        // background: '#fff',
        // border: '10px solid black'
      },
      Col: {
        // background: 'red',
        // width: '375px',
        // height: '375px',
        // border: '10px solid black'
      },
      imgcs: {
        display: "block",
        width: "100%",
        heigth: "100%",
        objectFit: "fill"
      }
    };
    return (
      <div style={styleCss.Arbox}>
        <div style={styleCss.Box}>
          <div style={styleCss.Banner}>
            <Carousel afterChange={this.props.onChange} autoplay>
              {this.props.fileList.map(e => {
                return (
                  <div style={styleCss.Col} key={e}>
                    <img style={styleCss.imgcs} src={e.thumbUrl} />
                  </div>
                );
              })}
            </Carousel>
          </div>
          <p>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</p>
        </div>
      </div>
    );
  }
}
export default ShowMobile;
