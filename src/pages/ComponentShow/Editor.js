import React from "react";
import BraftEditor from "../../components/EditorComponent";

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: "<h5>ooooooooooooooopppppppppp</h5>"
    };
    console.log("wwwwwwwwwwwwwwwwwwwww", this.props, this.state);
  }
  componentDidMount() {}
  // handleChange = (editorState) => {
  //   const htmlString = editorState.toHTML()
  //   this.setState({ editorState: editorState }, () => {
  //       this.props.onChange(htmlString)
  //   })
  // }

  onChange(e) {
    console.log("haaaaaaaa", e);
  }
  render() {
    // const { editorState } = this.state
    // const controls = [
    //     'undo', 'redo', 'separator',
    //     'font-size', 'line-height', 'letter-spacing', 'separator',
    //     // 'text-color', 'bold', 'italic', 'underline', 'strike-through', 'separator',
    //     // 'superscript', 'subscript', 'remove-styles', 'emoji', 'separator', 'text-indent', 'text-align', 'separator',
    //     // 'headings', 'list-ul', 'list-ol', 'blockquote', 'code', 'separator',
    //     // 'link', 'separator', 'hr', 'separator',
    //     // 'media', 'separator',
    //     // 'clear'
    // ]

    return (
      <div>
        <BraftEditor
          val={this.state.val}
          width="500px"
          height="800px"
          onChange={this.onChange}
        />
      </div>
    );
  }
}
export default Editor;
