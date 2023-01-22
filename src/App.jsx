import { ToastContainer } from "react-toastify";
import { RoutesMain as Routes } from "./routes";
import { GloblalStyles } from "./styles/GlobalStyles";
import "react-toastify/dist/ReactToastify.css";

export function App() {
  return (
    <div>
      <GloblalStyles />
      <Routes />
      <ToastContainer autoClose={1000} theme="light" />
    </div>
  );
}
