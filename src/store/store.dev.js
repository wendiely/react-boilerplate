import { createStore, applyMiddleware, compose } from "redux";
// import { createEpicMiddleware } from "redux-observable";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import rootReducer, { rootEpic } from "@/ducks";

export const history = createBrowserHistory();

// const epicMiddleware = createEpicMiddleware(rootEpic);

function configureStore() {
  let store;
  const token = window.localStorage.getItem("x-auth-token");
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  if (token) {
    const preloadedState = {
      user: {
        token
      }
    };
    store = createStore(
      rootReducer(history),
      preloadedState,
      composeEnhancers(
        applyMiddleware(
          // epicMiddleware,
          routerMiddleware(history)
        )
      )
    );
    return store;
  } else {
    store = createStore(
      rootReducer(history),
      composeEnhancers(
        applyMiddleware(
          // epicMiddleware,
          routerMiddleware(history)
        )
      )
    );
    return store;
  }
}

export const store = configureStore();
