import React from "react";
import ReactDom from "react-dom";
import { Provider, connect } from "react-redux";
import { createGlobalStyle } from "styled-components";
import App from "./App";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import store from "./store";
import MoviePage from "./containers/MoviePage";
import Toaster from "./components/Toaster";

const GlobalStyles = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html {
  font-family: 'Roboto', sans-serif;
}
body {
  position: absolute;
}
`;

const Root = ({ showToaster, message }) => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/movie/:id" component={MoviePage} />
    </Switch>
    <Toaster showToaster={showToaster}>{message}</Toaster>
  </BrowserRouter>
);

const mapStateToProps = state => ({
  showToaster: state.movies.showToaster,
  message: state.movies.message
});

const RootWithProps = connect(mapStateToProps)(Root);

ReactDom.render(
  <Provider store={store}>
    <GlobalStyles />
    <RootWithProps />
  </Provider>,
  document.getElementById("root")
);
