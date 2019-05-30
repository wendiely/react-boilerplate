import React from "react";

import ImgCrop from "antd-img-crop";
import { Upload, Icon, Modal } from "antd";

class PicturesWall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previewVisible: false,
      previewImage: ""
    };
    console.log(this.props);
  }

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = file => {
    console.log("我在查看图片啦", file);
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true
    });
  };

  handleChange = ({ fileList }) => {
    console.log("qwertyui", fileList);
    this.setState({ fileList });
    this.props.getlist(fileList);
  };

  render() {
    const { fileList } = this.props;
    const { previewVisible, previewImage } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const dd = {
      bord: {
        width: "550px",
        margin: "0 auto"
      }
    };
    return (
      <div className="clearfix" style={dd.bord}>
        <ImgCrop width="200" height="200">
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            fileList={fileList}
            onPreview={this.handlePreview}
            onChange={this.handleChange}
          >
            {fileList.length >= 10 ? null : uploadButton}
          </Upload>
        </ImgCrop>
        {/* 查看图片的Modal框 */}
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
