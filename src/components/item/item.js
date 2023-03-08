import React, { Component } from "react";

import { Card, Layout, Image, Typography, Tag } from "antd";

import "./item.css";

const { Sider, Content } = Layout;
const { Title, Paragraph } = Typography;

export default class Item extends Component {
  formatDate(date) {
    return new Date(date).toLocaleDateString("en-us", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  render() {
    const { item, genresList } = this.props;
    let genresList2;

    if (item && genresList) {
      genresList2 = item.genre_ids.map((id) => {
        return genresList.find((genre) => {
          return genre.id === id;
        }).name;
      });
      console.log(genresList2);
    }

    //Сколько жанров отображать? Сколько жанров может быть? .length?
    return (
      <Card className="card2">
        <Layout className="layout">
          <Sider width={184}>
            <Image
              src={
                item
                  ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${item.poster_path}`
                  : null
              }
            />
          </Sider>
          <Content className="content">
            <Title level={3}>{item ? item.title : null}</Title>
            <Paragraph className="paragraph">
              {item ? this.formatDate(item.release_date) : null}
            </Paragraph>
            <Paragraph>
              <Tag className="tag">{genresList2 ? genresList2[0] : null}</Tag>
              <Tag className="tag">{genresList2 ? genresList2[1] : null}</Tag>
            </Paragraph>
            <Paragraph>{item ? item.overview : null}</Paragraph>
          </Content>
        </Layout>
      </Card>
    );
  }
}
