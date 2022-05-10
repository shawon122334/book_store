import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import AddBook from "./components/AddBook";
import Books from "./components/Book/Books";
import Header from "./components/Header";
import Home from "./components/Home";
function App() {
  return (
    <React.Fragment>
      <header>
        <Header></Header>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home></Home>} exact ></Route>
          <Route path="/add" element={<AddBook></AddBook>} exact ></Route>
          <Route path="/books" element={<Books></Books>} exact ></Route>
          <Route path="/about" element={<About></About>} exact ></Route>
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
