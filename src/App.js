import React from "react";

import Home from "./pages/home";
import Rooms from "./pages/rooms";
import SignleRoom from "./pages/singleRoom";
import Error from "./pages/error";

import "./App.css";

function App() {
  return (
    <>
      <Home />
      <Rooms />
      <SignleRoom />
      <Error />
    </>
  );
}

export default App;
