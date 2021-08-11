// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";

// import ProtectedRoute from "../protectedRoute";

function MyApp({ Component, pageProps, router }: AppProps) {
  // const router = useRouter();

  return (
    <Provider store={store}>
      {/* <ProtectedRoute router={router}> */}
      <Component {...pageProps} />
      {/* </ProtectedRoute> */}
    </Provider>
  );
}

export default MyApp;
