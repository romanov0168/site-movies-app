import React, { Component } from "react";

import { Card, Layout, Image, Typography, Tag } from "antd";
import { format } from "date-fns";

import "./item.css";

const { Sider, Content } = Layout;
const { Title, Paragraph } = Typography;

export default class Item extends Component {
  state = {
    wordLimit: 0,
    addition: "",
    loading: true,
  };

  formatDate(date) {
    // return new Date(date).toLocaleDateString("en-us", {
    //   year: "numeric",
    //   month: "long",
    //   day: "numeric",
    // });
    if (date === "") {
      return null;
    }

    return format(new Date(date), "MMMM dd, yyyy");
  }

  root = document.getElementById("root");
  isEnough = false;

  addWord(originalLength, id) {
    let content =
      this.root.children[0].children[0].children[id - 1].children[0].children[0]
        .children[0].children[1];
    let headerHeight =
      content.children[0].clientHeight +
      12 +
      (content.children[1].clientHeight + 14) * 2 +
      content.children[2].clientHeight;
    let maxFooterHeight = content.clientHeight - headerHeight;
    let footerHeight = content.children[3].clientHeight;

    if (
      footerHeight < maxFooterHeight &&
      this.state.wordLimit < originalLength &&
      this.isEnough === false
    ) {
      this.setState(() => {
        return { wordLimit: this.state.wordLimit + 1, addition: " ..." };
      });
    } else if (
      this.state.wordLimit < originalLength &&
      this.isEnough === false &&
      this.state.wordLimit > 0
    ) {
      this.setState(() => {
        return { wordLimit: this.state.wordLimit - 2 };
      });
      this.isEnough = true;
    } else if (this.state.wordLimit === originalLength) {
      this.setState(() => {
        return { addition: "" };
      });
    }
  }

  render() {
    const { item, genresList, id } = this.props;
    let matchingGenresList;
    let elements;
    let idCounter = 0;
    let overview;
    let originalLength;

    if (item && genresList) {
      matchingGenresList = item.genre_ids.map((id) => {
        return genresList.find((genre) => {
          return genre.id === id;
        }).name;
      });

      elements = matchingGenresList.map((item) => {
        idCounter++;

        return (
          <Tag key={idCounter} className="tag">
            {item}
          </Tag>
        );
      });

      if (item.overview !== "") {
        overview = item.overview.split(" ");
        originalLength = overview.length;
        overview =
          overview.slice(0, this.state.wordLimit).join(" ") +
          this.state.addition;

        setTimeout(this.addWord.bind(this, originalLength, id), 1);
      }
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
            <Paragraph>{overview}</Paragraph>
          </Content>
        </Layout>
      </Card>
    );
  }
}
