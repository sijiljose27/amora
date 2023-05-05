import React from "react";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import MainApp from "./Navigations";

import About from "./Screens/About/about-Us";

function App() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
  
}

export default App;
