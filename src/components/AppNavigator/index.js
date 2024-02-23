import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "../Templates/Header";
import Footer from "../Templates/Footer";
import { HomePage } from "../../pages/Home";
import { DetailPage } from "../../pages/Detail";
import { PAGES } from "../../configs/constants";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const AppNavigator = () => {
  return (
    <Router history={history}>
      <div>
        <div>
          {/* Apps Title & Navigation */}
          <Header />

          {/* Routes Section - Will Render Depend The Page */}
          <Routes>
            <Route path={PAGES.HOME} element={<HomePage />} />
            <Route path={PAGES.DETAIL} element={<DetailPage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default AppNavigator;
