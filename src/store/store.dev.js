import { createStore, applyMiddleware, compose } from "redux";
// import { createEpicMiddleware } from "redux-observable";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "react-router-redux";
import rootReducer, { rootEpic } from "@/ducks";

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
      rootReducer,
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
      rootReducer,
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
export const history = createBrowserHistory();
