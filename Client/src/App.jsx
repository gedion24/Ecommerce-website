/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Pages/Header/Header";
import Homepage from "./Pages/Homepages/Homepage";
import Footer from "./Pages/Header/Footer";

function App() {
  return (
    <>
      <Header />
      <Homepage />
      <Footer />
    </>
  );
}

export default App;
