import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Card, Layout } from 'antd';
import Menu from '../../Components/Menu';

const { Sider, Content } = Layout;

const MainLayout = () => {

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        theme="light"
        width={250}
        trigger={null}
        style={{
          position: 'fixed',
          zIndex: 1,
          height: '100%',
        }}
      >
        <Menu />
      </Sider>
      <Layout>
        <Content
          style={{
            // marginLeft: collapsed ? 80 : 225,
            marginLeft: 250,
            padding: 10,
            transition: '.3s',
          }}
        >
          <Card size="small">
            <Outlet />
          </Card>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
