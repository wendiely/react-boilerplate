import React from "react";
import BraftEditor from "braft-editor";
import "braft-editor/dist/index.css";

class EditorComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 创建一个空的editorState作为初始值
      editorState: BraftEditor.createEditorState(null)
    };
    console.log("wwwwwwwwwwwwwwwwwwwww", this.props, this.state);
  }
  componentDidMount() {
    // 获取默认值
    this.setState({
      editorState: BraftEditor.createEditorState(this.props.val)
    });
  }

  submitContent = async () => {
    // 在编辑器获得焦点时按下ctrl+s会执行此方法
    // 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
    const htmlContent = this.state.editorState.toHTML();
    const result = await saveEditorContent(htmlContent);
  };

  // 编辑器中内容改变后的结果
  handleEditorChange = editorState => {
    this.setState({ editorState });
    console.log("啊哈哈哈哈", editorState.toHTML());
    this.props.onChange(editorState.toHTML());
  };

  render() {
    const { editorState } = this.state;
    const styleCss = {
      dd: {
        padding: "20px"
        // border: '1px solid #333'
      },
      editor: {
        width: "100%"
      }
    };
    return (
      <div className="my-component" style={styleCss.dd}>
        <BraftEditor
          value={editorState}
          onChange={this.handleEditorChange}
          onSave={this.submitContent}
        />
      </div>
    );
  }
}
export default EditorComponent;
