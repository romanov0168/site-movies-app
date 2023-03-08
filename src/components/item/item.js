import React, { Component } from "react";

import { Card, Layout, Image, Typography, Tag } from "antd";

import "./item.css";

const { Sider, Content } = Layout;
const { Title, Paragraph } = Typography;

export default class ItemList extends Component {
  render() {
    return (
      <Card style={{ boxShadow: "0 4px 12px 0 rgba(0, 0, 0, 0.15)" }}>
        <Layout style={{ width: "414px", height: "280px" }}>
          <Sider width={184}>
            <Image src="https://m.media-amazon.com/images/M/MV5BYjBjMTgyYzktN2U0Mi00YTJhLThkZDQtZmM1ZDlmNWMwZDQ3XkEyXkFqcGdeQXVyMDU5MDEyMA@@._V1_.jpg" />
          </Sider>
          <Content style={{ padding: "12px 20px", backgroundColor: "#FFFFFF" }}>
            <Title level={3}>The way back</Title>
            <Paragraph style={{ color: "#827E7E" }}>March 5, 2020</Paragraph>
            <Paragraph>
              <Tag style={{ color: "rgba(0, 0, 0, 0.65)" }}>Action</Tag>
              <Tag style={{ color: "rgba(0, 0, 0, 0.65)" }}>Drama</Tag>
            </Paragraph>
            <Paragraph>
              A former basketball all-star, who has lost his wife and family
              foundation in a struggle with addiction attempts to regain his
              soul and salvation by becoming the coach of a disparate ...
            </Paragraph>
          </Content>
        </Layout>
      </Card>
    );
  }
}
