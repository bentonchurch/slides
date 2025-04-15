import { Layout } from "./components/layout/index.js";
import Markdown from "react-markdown";
import { Avatar, Divider, Space } from "antd";
import { AlbumCard } from "./components/albumCard/index.js";

const markdown = `
# Welcome to WorshipHub!
The Benton Youth slides application.
`;

function App() {
  return (
    <Layout>
      <h1>Recent</h1>
      <Space size="middle">
        <AlbumCard
          title="Here's a really long title"
          subtitle="September 14, 2025"
          imageSrc="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          imageAlt="Arctic Fox"
          avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=0" />}
        />
        <AlbumCard
          title="Album 2"
          subtitle="April 14, 2025"
          imageSrc="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          imageAlt="Arctic Fox"
          avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
        />
        <AlbumCard
          title="Album 3"
          subtitle="April 14, 2025"
          imageSrc="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          imageAlt="Arctic Fox"
          avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=6" />}
        />
        <AlbumCard
          title="Album 4"
          subtitle="April 14, 2025"
          imageSrc="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          imageAlt="Arctic Fox"
          avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=9" />}
        />
      </Space>
      <Divider />
      <Markdown>{markdown}</Markdown>
    </Layout>
  );
}

export { App };
