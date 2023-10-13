import "../styles/globals.css";
import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import { Provider } from "react-redux";
import "swiper/css";
import { store } from "../store/index";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
        {/* <button
          onClick={openComposeModal}
          className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
        >
          Compose
        </button> */}
      </Layout>
    </Provider>
  );
}

export default MyApp;
