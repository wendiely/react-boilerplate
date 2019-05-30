import React from "react";
import { Row, Col, Carousel, Form } from "antd";
import ShowMobile from "../../components/ShowMobile";
import UploadPhoto from "../../components/UploadPhoto";

class mobileList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileList: [
        {
          uid: "-1",
          name: "ddxxnnx.png",
          status: "done",
          thumbUrl:
            "http://pic24.nipic.com/20120922/10898738_143746326185_2.jpg"
        },
        {
          uid: "0",
          name: "xxx.png",
          status: "done",
          thumbUrl:
            "http://i0.hdslb.com/bfs/archive/f268ef6b15b94f164cbbbd1b910765242210247e.jpg"
        },
        {
          uid: "1",
          name: "xxnnx.png",
          status: "done",
          thumbUrl: "http://pic9.nipic.com/20100827/5252423_161258496483_2.jpg"
        }
      ]
    };
  }

  componentDidMount() {
    console.log("出现了,我是手机的界面,我会做一个富文本", this.props);
  }
  onChange() {
    console.log("hghjkl");
  }
  getlist(e) {
    console.log("我是获取它的长度的", e);
    this.setState({ fileList: e });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Row gutter={96}>
          <Col span={12}>
            <ShowMobile
              fileList={this.state.fileList}
              onChange={this.onChange.bind(this)}
            />
          </Col>
          <Col span={12}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Item label="添加页面轮播图片">
                {getFieldDecorator("fileList", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your E-mail!"
                    }
                  ]
                })(
                  <UploadPhoto
                    fileList={this.state.fileList}
                    getlist={this.getlist.bind(this)}
                  />
                )}
              </Form.Item>
            </Form>
            {/* <div>
              <h3>添加页面轮播图片</h3>
              <div style={{border: '1px solid #333', borderRadius: '10px'}}>
                <UploadPhoto fileList={this.state.fileList} getlist= {this.getlist.bind(this)} />
              </div>
              

            </div> */}
          </Col>
        </Row>
      </div>
    );
  }
}
mobileList = Form.create({ name: "people" })(mobileList);

export default mobileList;
