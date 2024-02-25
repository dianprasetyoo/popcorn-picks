import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

interface Props {
  path: string;
  children: React.ReactNode;
}

export const Wrapper = (props: Props) => {
  return (
    <Router>
      <Routes>
        <Route path={props.path} element={props.children} />
      </Routes>
    </Router>
  );
};
