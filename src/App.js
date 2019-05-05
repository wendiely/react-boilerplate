import React from "react";
import ErrorBoundary from "@/components/errorBoundary";
import { Provider } from "react-redux";
import { LocaleProvider } from "antd";
import zh_CN from "antd/lib/locale-provider/zh_CN";
import Router from "./router";
import { store } from "@/store";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ErrorBoundary>
        <Provider store={store}>
          <LocaleProvider locale={zh_CN}>
            <Router />
          </LocaleProvider>
        </Provider>
      </ErrorBoundary>
    );
  }
}

export default App;
