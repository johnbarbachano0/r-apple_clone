import React from "react";
import Homepage from "./pages/Homepage";
import Theme from "./helpers/theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Theme>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </BrowserRouter>
      </Theme>
    </Provider>
  );
}

export default App;
