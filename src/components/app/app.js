import React from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";
import PersonDetails from "../person-details";

import { Layout } from "antd";

import "./app.css";

import "antd/dist/reset.css";

const App = () => {
  return (
    <Layout className="app">
      <ItemList />
    </Layout>
  );
};

export default App;
