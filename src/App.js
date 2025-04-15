import { Layout } from "./components/layout/index.js";
import Markdown from "react-markdown";
import { Divider, Space } from "antd";
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
          title="Album 1"
          subtitle="Edited April 14, 2025"
          imageSrc="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          imageAlt="Arctic Fox"
        />
        <AlbumCard
          title="Album 2"
          subtitle="Edited April 14, 2025"
          imageSrc="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          imageAlt="Arctic Fox"
        />
        <AlbumCard
          title="Album 3"
          subtitle="Edited April 14, 2025"
          imageSrc="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          imageAlt="Arctic Fox"
        />
        <AlbumCard
          title="Album 4"
          subtitle="Edited April 14, 2025"
          imageSrc="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          imageAlt="Arctic Fox"
        />
      </Space>
      <Divider />
      <Markdown>{markdown}</Markdown>
    </Layout>
  );
}

export { App };
