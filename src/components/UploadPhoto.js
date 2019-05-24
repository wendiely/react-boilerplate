import React from "react";

import { Upload, Icon, Modal } from "antd";

class PicturesWall extends React.Component {
  state = {
    previewVisible: false,
    previewImage: "",
    fileList: [
      {
        uid: "-1",
        name: "xxx.png",
        status: "done",
        url:
          "http://i0.hdslb.com/bfs/archive/f268ef6b15b94f164cbbbd1b910765242210247e.jpg"
        // [
        //   'http://hbimg.b0.upaiyun.com/cf4dee008759c15f72c7741c4012c5cc96593141899c4-cAOni6_fw658',
        //   'http://i0.hdslb.com/bfs/archive/f268ef6b15b94f164cbbbd1b910765242210247e.jpg',
        //   'https://b-ssl.duitang.com/uploads/item/201810/03/20181003221050_pugpp.thumb.224_0.png']
      }
    ]
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true
    });
  };

  handleChange = ({ fileList }) => this.setState({ fileList });

  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div className="clearfix">
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
        >
          {fileList.length >= 10 ? null : uploadButton}
        </Upload>
        <Modal
          visible={previewVisible}
          footer={null}
          onCancel={this.handleCancel}
        >
          <img alt="example" style={{ width: "100%" }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}

export default PicturesWall;
