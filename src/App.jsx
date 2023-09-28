import React from "react";
import Header from "./components/Header";
import Board from "./Board";
import Footer from "./components/Footer";
//bg-gradient-to-t from-sky-400 to-indigo-900
function App() {
  return <div className="text-white mb-2">
    <Header/>
    <Board/>
    <Footer/>
  </div>;
}

export default App;
