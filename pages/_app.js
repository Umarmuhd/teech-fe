import { Provider } from "@/context/AuthContext";
import "tailwindcss/tailwind.css";

//styles
import "@/styles/globals.css";

//component
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <ToastContainer position="top-center" />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
