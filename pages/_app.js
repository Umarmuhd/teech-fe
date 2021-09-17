import React from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";

import { Provider } from "@/context/AuthContext";
import "tailwindcss/tailwind.css";

//styles
import "@/styles/globals.css";

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    const Layout = Component.layout || (({ children }) => <>{children}</>);
    return (
      <Provider>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>TEECH - Get a home tutoring</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    );
  }
}
