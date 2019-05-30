import React from "react";

import { Steps, Button, message } from "antd";

const Step = Steps.Step;

import BraftEditor from "../../components/EditorComponent";

class StepsZou extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      HtmlContent: ""
    };
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
    console.log("我点了");
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }
  done() {
    message.success("我提交富文本内容啦， 这时可以调用接口向后台传输数据");

    this.axios;
  }
  onChange = e => {
    console.log("happy", e);
    this.setState({ HtmlContent: e });
  };

  render() {
    const { current } = this.state;

    const steps = [
      {
        title: "First",
        content: (
          <BraftEditor
            val={this.state.HtmlContent}
            width="500px"
            height="800px"
            onChange={this.onChange}
          />
        )
      },
      {
        title: "Second",
        content: "Second-content"
      },
      {
        title: "Last",
        content: (
          <div style={{ width: "300px", margin: "0 auto" }}>
            <p style={{ fontSize: "30px" }}>富文本内容显示, 请确认样式后提交</p>

            <div
              dangerouslySetInnerHTML={{
                __html: this.state.HtmlContent
              }}
            />
          </div>
        )
      }
    ];
    return (
      <div>
        <Steps current={current}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div
          className="steps-content"
          style={{
            width: "100%",
            padding: "32px",
            height: "600px",
            overflowX: "hidden",
            overflowY: "scroll"
          }}
        >
          {steps[current].content}
        </div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => this.next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={() => this.done()}>
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Previous
            </Button>
          )}
        </div>
      </div>
    );
  }
}

export default StepsZou;
