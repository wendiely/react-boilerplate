import React from "react";

/**
 * 错误捕捉页面
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  // 重新加载页面
  onReturn = () => {
    location.reload(true);
  };

  render() {
    if (this.state.errorInfo) {
      return (
        <div style={{ textAlign: "center" }}>
          <i
            className="iconfont icon_page"
            style={{ fontSize: "14rem", color: "#86a4d8" }}
          />
          <h2>
            哎呀，有些地方出错了，
            <a onClick={this.onReturn}>刷新页面</a>
          </h2>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
