import React from "react";
import { Provider } from "react-redux";
import App from "next/app";
import "../styles/globals.css";
import store from "../store";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default MyApp;
