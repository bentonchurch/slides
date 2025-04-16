import React, { useState } from 'react';
import { Sidebar } from './Sidebar.js';
import { Layout, ConfigProvider, Space } from 'antd';
import { theme } from '../../theme.js';
import "./styles.css";

function App({ children }) {
  const [ isMobile, setMobile ] = useState(false);

  window.addEventListener("resize", () => setMobile(window.innerWidth < 512));

  return (
    <ConfigProvider theme={theme}>
      <Layout className="main-layout">
        <Sidebar mobile={isMobile} width={320} />
        <Layout>
          <Layout.Header style={{ backgroundColor: "white", borderBottom: "1px solid #f0f0f0" }}>
            Test
          </Layout.Header>
          <Layout.Content style={{ backgroundColor: "white" }}>
            <Space direction='vertical' align='center' style={{ width: "100%" }}>
              <div>{children}</div>
            </Space>
          </Layout.Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}

export { App as Layout };
