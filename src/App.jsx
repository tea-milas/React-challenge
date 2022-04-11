import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "./global.css";
import UserProvider from "./context/userContext";
import PlaylistOverview from "./pages/PlaylistOverview";
import DataProvider from "./context/dataContext";

/**
 * The starting page for your App
 */

class App extends Component {
  render() {
    return (
      <UserProvider>
        <BrowserRouter>
          <DataProvider>
            <Header />
            <main>
              <section>
                <Routes>
                  <Route path={"/"} element={<Home />} />
                  <Route
                    path={"/playlist/:id"}
                    element={<PlaylistOverview />}
                  />
                </Routes>
              </section>
            </main>
          </DataProvider>
        </BrowserRouter>
      </UserProvider>
    );
  }
}

export default App;
