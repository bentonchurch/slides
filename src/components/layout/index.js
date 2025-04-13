import React, { useState } from 'react';
import { Sidebar } from './Sidebar.js';
import { Layout, ConfigProvider } from 'antd';
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
          <Layout.Header>
            Test
          </Layout.Header>
          <Layout.Content>
            {children}
          </Layout.Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}

export { App as Layout };
