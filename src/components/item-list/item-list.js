import React, { Component } from "react";

import TheMovieDBService from "../../services/the-movie-db-service";

import Item from "../item";

import { Space } from "antd";

import "./item-list.css";

export default class ItemList extends Component {
  theMovieDBService = new TheMovieDBService();

  state = {
    itemList: null,
    genresList: null,
  };

  constructor() {
    super();

    this.updateItemList();
    this.updateGenresList();
  }

  updateItemList() {
    this.theMovieDBService.getMoviesByQuery("return").then((itemList) => {
      this.setState({
        itemList,
      });
    });
  }

  updateGenresList() {
    this.theMovieDBService.getGenres().then((genresList) => {
      this.setState({
        genresList,
      });
    });
  }

  render() {
    const { itemList, genresList } = this.state;
    let item;
    let item2;

    if (itemList) {
      item = itemList[0];
      item2 = itemList[1];
    }

    return (
      <Space wrap size={36} className="space">
        <Item item={item} genresList={genresList} />
        <Item item={item2} genresList={genresList} />
      </Space>

      // <ul className="item-list list-group">
      //   <li className="list-group-item">Luke Skywalker</li>
      //   <li className="list-group-item">Darth Vader</li>
      //   <li className="list-group-item">R2-D2</li>
      // </ul>
    );
  }
}
