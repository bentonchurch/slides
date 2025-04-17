import { Layout } from "./components/layout/index.js";
import Markdown from "react-markdown";
import { Divider, Space } from "antd";
import { AlbumCard } from "./components/albumCard/index.js";
import { ProfileAvatar } from "./components/profileAvatar/index.js";

const markdown = `
# Markdown Sample
Hello, everybody!  Welcome to WorshipHub - the *official* Benton Youth slides application!  It's still under \`beta\`, so don't use it yet :)
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
          avatar={<ProfileAvatar name="Ella Emerson" username="ellaemerson123" image="https://api.dicebear.com/7.x/miniavs/svg?seed=0" />}
        />
        <AlbumCard
          title="Album 2"
          subtitle="April 14, 2025"
          imageSrc="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          imageAlt="Arctic Fox"
          avatar={<ProfileAvatar name="Jimothy Cancer" username="itsyourmom" image="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
        />
        <AlbumCard
          title="Album 3"
          subtitle="April 14, 2025"
          imageSrc="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          imageAlt="Arctic Fox"
          avatar={<ProfileAvatar name="Fred Franklin" username="freddyfazbear" image="https://api.dicebear.com/7.x/miniavs/svg?seed=6" />}
        />
        <AlbumCard
          title="Album 4"
          subtitle="April 14, 2025"
          imageSrc="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          imageAlt="Arctic Fox"
          avatar={<ProfileAvatar name="Lily Linton" username="lilylinton911" image="https://api.dicebear.com/7.x/miniavs/svg?seed=9" />}
        />
      </Space>
      <Divider />
      <h1>Pinned Users</h1>
      <Space size="middle" direction="horizontal" style={{ width: '100%', justifyContent: "center" }}>
        <ProfileAvatar size={128} name="Ella Emerson" username="ellaemerson123" image="https://api.dicebear.com/7.x/miniavs/svg?seed=0" />
        <ProfileAvatar size={128} name="Jimothy Cancer" username="itsyourmom" image="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
        <ProfileAvatar size={128} name="Fred Franklin" username="freddyfazbear" image="https://api.dicebear.com/7.x/miniavs/svg?seed=6" />
        <ProfileAvatar size={128} name="Lily Linton" username="lilylinton911" image="https://api.dicebear.com/7.x/miniavs/svg?seed=9" />
      </Space>
      <Divider />
      <Markdown>{markdown}</Markdown>
    </Layout>
  );
}

export { App };
