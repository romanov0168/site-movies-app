import React, { Component } from "react";

import { Card, Layout, Image, Typography, Tag } from "antd";

import "./item.css";

const { Sider, Content } = Layout;
const { Title, Paragraph } = Typography;

export default class ItemList extends Component {
  render() {
    return (
      <Card className="card2">
        <Layout className="layout">
          <Sider width={184}>
            <Image src="https://m.media-amazon.com/images/M/MV5BYjBjMTgyYzktN2U0Mi00YTJhLThkZDQtZmM1ZDlmNWMwZDQ3XkEyXkFqcGdeQXVyMDU5MDEyMA@@._V1_.jpg" />
          </Sider>
          <Content className="content">
            <Title level={3}>The way back</Title>
            <Paragraph className="paragraph">March 5, 2020</Paragraph>
            <Paragraph>
              <Tag className="tag">Action</Tag>
              <Tag className="tag">Drama</Tag>
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
