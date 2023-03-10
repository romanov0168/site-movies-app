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
    let elements;
    let idCounter = 0;

    if (itemList) {
      elements = itemList.map((item) => {
        idCounter++;

        return <Item key={idCounter} item={item} genresList={genresList} />;
      });
    }

    return (
      <Space wrap size={36} className="space">
        {elements}
      </Space>
    );
  }
}
