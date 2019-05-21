import React from "react";

import { Tag, Input, Tooltip, Icon } from "antd";

class Tags extends React.Component {
  state = {
    tags: [
      "Tag 1",
      "Tag 2",
      "Tag 3",
      "哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈"
    ],
    inputVisible: false,
    inputValue: ""
  };

  handleClose = removedTag => {
    const tags = this.state.tags.filter(tag => tag !== removedTag);
    console.log(tags);
    this.setState({ tags });
  };

  // 点击，添加输入框显现
  showInput = () => {
    console.log("输入框显现");
    this.setState({ inputVisible: true }, () => this.input.focus());
  };

  handleInputChange = e => {
    console.log("输入框内容改变");
    this.setState({ inputValue: e.target.value });
  };

  handleInputConfirm = () => {
    const { inputValue } = this.state;
    let { tags } = this.state;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    console.log("确认改变内容", tags);
    this.setState({
      tags,
      inputVisible: false,
      inputValue: ""
    });
  };
  // ref属性用于获取真实的节点
  saveInputRef = input => (this.input = input);

  render() {
    const { tags, inputVisible, inputValue } = this.state;
    const styleCss = {
      fg: {
        marginBottom: "20px"
      }
    };
    console.log("啦啦啦啦啦啦", tags);
    return (
      <div>
        {tags.map((tag, index) => {
          const isLongTag = tag.length > 20;
          const tagElem = (
            <Tag
              style={styleCss.fg}
              key={tag}
              closable={index !== 0}
              onClose={() => this.handleClose(tag)}
            >
              {isLongTag ? `${tag.slice(0, 20)}...` : tag}
            </Tag>
          );
          return isLongTag ? (
            <Tooltip title={tag} key={tag}>
              {tagElem}
            </Tooltip>
          ) : (
            tagElem
          );
        })}
        {inputVisible && (
          <Input
            ref={this.saveInputRef}
            type="text"
            size="small"
            style={{ width: 78 }}
            value={inputValue}
            onChange={this.handleInputChange}
            onBlur={this.handleInputConfirm}
            onPressEnter={this.handleInputConfirm}
          />
        )}
        {!inputVisible && (
          <Tag
            onClick={this.showInput}
            style={{ background: "#fff", borderStyle: "dashed" }}
          >
            <Icon type="plus" /> New Tag
          </Tag>
        )}
      </div>
    );
  }
}

export default Tags;
