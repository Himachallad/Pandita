import React, { useEffect } from "react";
import Head from "next/head";
import './globalStyles.css';
import { CssBaseline } from "@material-ui/core";
import NavigationBar from "../src/components/custom/AppNav";
import CustomTheme from "../src/theme/CustomTheme";

export default function MyApp(props) {
  const { Component, pageProps } = props;

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Pandita</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <CustomTheme>
        <CssBaseline />
          <Component {...pageProps} />
      </CustomTheme>
    </>
  );
}
