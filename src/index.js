import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { StateProvider } from "./context/stateProvider";
import { InitialState } from "./context/initialState";
import reducer from "./context/reducer";

const container = document.getElementById("app");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <>
    <BrowserRouter>
      <StateProvider initialState={InitialState} reducer={reducer}>
        <App tab="home" />
      </StateProvider>
    </BrowserRouter>
  </>
);
