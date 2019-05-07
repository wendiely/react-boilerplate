import React from "react";
import ErrorBoundary from "@/components/errorBoundary";
import { Provider, ReactReduxContext } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { LocaleProvider } from "antd";
import zh_CN from "antd/lib/locale-provider/zh_CN";
import Router from "./router";
import { store, history } from "@/store";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ErrorBoundary>
        <Provider store={store} context={ReactReduxContext}>
          <ConnectedRouter history={history} context={ReactReduxContext}>
            <LocaleProvider locale={zh_CN}>
              <Router />
            </LocaleProvider>
          </ConnectedRouter>
        </Provider>
      </ErrorBoundary>
    );
  }
}

export default App;
