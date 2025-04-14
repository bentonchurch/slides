import { AppstoreOutlined, SettingOutlined, HomeOutlined, InfoCircleOutlined, ReadOutlined } from '@ant-design/icons';
import { Menu, Drawer, Layout } from 'antd';
import { useState } from 'react';

const items = [
  { key: 'home', icon: <HomeOutlined />, label: 'Home' },
  { key: 'albums', icon: <AppstoreOutlined />, label: 'Albums' },
  { key: 'library', icon: <ReadOutlined />, label: 'Library' },
  { key: 'settings', icon: <SettingOutlined />, label: 'Settings' },
  {
    key: 'sub2',
    label: 'Navigation Two',
    icon: <AppstoreOutlined />,
    children: [
      { key: '5', label: 'Option 5' },
      { key: '6', label: 'Option 6' },
    ],
  },
  { type: 'divider' },
  { key: 'info', icon: <InfoCircleOutlined />, label: 'Info' },
];


function Sidebar({ mobile, width }) {
  const [ collapsed, setCollapsed ] = useState(true);
  
  const onClick = (e) => {
    console.log('click ', e);
  };

  const menu = 
    <Menu
      onClick={onClick}
      defaultSelectedKeys={['home']}
      defaultOpenKeys={['sub1']}
      style={{ width: '100%', height: '100%' }}
      mode="inline"
      theme="light"
      items={items}
      inlineCollapsed={!mobile && collapsed}
    />;console.log(collapsed);

  return (
    mobile ? (
      <Drawer
        placement={'left'}
        closable={false}
        onClose={() => setCollapsed(true)}
        style={{ padding: 0 }}
        styles={{ body: {padding: 0}}}
        open={!collapsed}
        width={width}
      >
        {menu}
      </Drawer>
    ) : (
      <Layout.Sider
        theme="light"
        width={width}
        collapsed={collapsed}
        collapsible={true}
        onCollapse={(e) => setCollapsed(e)}
      >
        {menu}
      </Layout.Sider>
  ));
}

export { Sidebar };
