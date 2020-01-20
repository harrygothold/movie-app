import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";
import App from "./App";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import store from "./store";
import MoviePage from "./containers/MoviePage";

const GlobalStyles = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html {
  font-family: 'Roboto', sans-serif;
}
`;

const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/movie/:id' component={MoviePage} />
    </Switch>
  </BrowserRouter>
)

ReactDom.render(
  <Provider store={store}>
    <GlobalStyles />
    <Root />
  </Provider>,
  document.getElementById("root")
);
