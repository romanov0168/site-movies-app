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
    let actualGenresList;
    let elements;
    let idCounter = 0;

    if (item && genresList) {
      actualGenresList = item.genre_ids.map((id) => {
        return genresList.find((genre) => {
          return genre.id === id;
        }).name;
      });

      elements = actualGenresList.map((item) => {
        idCounter++;

        return (
          <Tag key={idCounter} className="tag">
            {item}
          </Tag>
        );
      });
    }

    return (
      <Card className="card2">
        <Layout className="layout">
          <Sider width={184}>
            <Image
              src={
                item.poster_path
                  ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${item.poster_path}`
                  : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-4ee37443c461fff5bc221b43ae018a5dae317469c8e2479a87d562537dd45fdc.svg"
              }
            />
          </Sider>
          <Content className="content">
            <Title level={3}>{item.title}</Title>
            <Paragraph className="paragraph">
              {this.formatDate(item.release_date)}
            </Paragraph>
            <Paragraph>{elements}</Paragraph>
            <Paragraph>{item.overview}</Paragraph>
          </Content>
        </Layout>
      </Card>
    );
  }
}
