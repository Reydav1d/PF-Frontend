import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./Redux/store/Store.js";
import App from "./App";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { googleCredential } from "./config";
//import { HashRouter } from "react-router-dom";
import axios from "axios";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { BrowserRouter } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:3001";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <GoogleOAuthProvider
        clientId={googleCredential.googleClientId}
        redirectUri="http://localhost:5173"
      >
        <App />
      </GoogleOAuthProvider>
    </BrowserRouter>
  </Provider>
);
