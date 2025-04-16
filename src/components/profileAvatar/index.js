import { Avatar, Space, Popover } from "antd";

function ProfileAvatar({ image, name, username, size }) {
  const popoverContent = (
    <Space direction="horizontal">
      <Avatar size={64} src={image} style={{ border: "1px solid #f0f0f0" }} />
      <Space direction="vertical" size={0}>
        <b>{name}</b>
        <span style={{ color: "#7F7F7F" }}>@{username}</span>
      </Space>
    </Space>
  );

  return (
    <Popover mouseEnterDelay={0.5} content={popoverContent}>
      <Avatar size={size} src={image} style={{ border: "1px solid #f0f0f0" }} />
    </Popover>
  );
}

export { ProfileAvatar };