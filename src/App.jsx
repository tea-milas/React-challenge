import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "./global.css";
import UserProvider from "./context/userContext";
import Info from "./pages/Info";

/**
 * The starting page for your App
 */

class App extends Component {
  render() {
    return (
      <UserProvider>
        <BrowserRouter>
          <Header />
          <main>
            <section>
              <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/playlist"} element={<Info />} />
              </Routes>
            </section>
          </main>
        </BrowserRouter>
      </UserProvider>
    );
  }
}

export default App;
