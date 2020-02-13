import React from 'react';
import { Layout } from 'antd';

import { App } from './styles';
import CurrencyConverter from './CurrencyConverter';
import './App.css';

const { Header, Footer, Content } = Layout;

function ClientApp() {
  return (
    <App>
      <Layout>
        <Header>header here</Header>
        <Content>
          <CurrencyConverter />
        </Content>
        <Footer>foot them here</Footer>
      </Layout>
    </App>
  );
}

export default ClientApp;
