import React from "react";
import Layout from "./components/layout/Layout";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Layout />
      </Router>
    </React.Fragment>
  );
};

export default App;
