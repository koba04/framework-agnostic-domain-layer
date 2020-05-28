import React from "react";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";
import { store } from "../app/store";
import { Blog } from "./Blog";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Helvetica Neue", Arial, sans-serif;
  }
`;

export const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Blog />
  </Provider>
);
