import React, { Component } from "react";

import Item from "../item";

import { Space } from "antd";

// import "./item-list.css";

export default class ItemList extends Component {
  render() {
    return (
      <Space
        wrap
        size={36}
        style={{
          width: "1024px",
          padding: "20px 30px",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </Space>

      // <ul className="item-list list-group">
      //   <li className="list-group-item">Luke Skywalker</li>
      //   <li className="list-group-item">Darth Vader</li>
      //   <li className="list-group-item">R2-D2</li>
      // </ul>
    );
  }
}
