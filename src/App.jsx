import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import "./global.css";
import UserProvider from "./context/userContext";
import PlaylistOverview from "./pages/PlaylistOverview/PlaylistOverview";
import DataProvider from "./context/dataContext";
import SearchResults from "./pages/SearchResults/SearchResults";

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
                  <Route path={"/search-results"} element={<SearchResults />} />
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
