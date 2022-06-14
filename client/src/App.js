import "./App.css";
import WebsiteContainer from "./Container/WebsiteContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Provider } from "react-redux";

import { store } from "./Container/Task/store";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Provider store={store}>
        <WebsiteContainer />
      </Provider>
    </div>
  );
}

export default App;
