import React from 'react';
import { Layout, Typography } from 'antd';

import { App } from './styles';
import CurrencyConverter from './CurrencyConverter';
import './App.css';

const { Header, Footer, Content } = Layout;
const { Title } = Typography;

function ClientApp() {
  return (
    <App>
      <Layout>
        <Header>
          <Title level={2}>Currency Converter</Title>
        </Header>
        <Content>
          <CurrencyConverter />
        </Content>
        <Footer>Joselie Castaneda</Footer>
      </Layout>
    </App>
  );
}

export default ClientApp;
