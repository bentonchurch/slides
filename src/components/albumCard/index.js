import { MoreOutlined } from "@ant-design/icons";
import { Button, Card, Dropdown, Space } from "antd";

const items = [
  {
    label: (
      <a href="https://www.antgroup.com" target="_blank" rel="noopener noreferrer">
        1st menu item
      </a>
    ),
    key: '0',
  },
  {
    label: (
      <a href="https://www.aliyun.com" target="_blank" rel="noopener noreferrer">
        2nd menu item
      </a>
    ),
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
];

function AlbumCard({ title, subtitle, imageSrc, imageAlt, avatar }) {
  const thumbnail = <img alt={imageAlt} src={imageSrc} draggable="false" />;
  const cover = <>{thumbnail}</>;

  return (
      <Card
        hoverable
        style={{ width: 256 }}
        cover={cover}
        size="small"
      >
        <Space style={{ width: "100%", justifyContent: "space-between" }} align="center">

          {avatar}
          <Card.Meta style={{width: "calc(256px - 80px - 24px)", textOverflow: "ellipsis"}} title={title} description={subtitle} size="small"></Card.Meta>

          <Dropdown menu={{ items }} trigger={['click']} arrow placement="bottomRight">
            <Button onClick={e => e.preventDefault()} type="text" shape="circle" icon={<MoreOutlined />} />
          </Dropdown>
        </Space>
      </Card>
  );
}

export { AlbumCard };
