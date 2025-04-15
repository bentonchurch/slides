import { Card } from "antd";

function AlbumCard({ title, subtitle, imageSrc, imageAlt }) {
  return (
      <Card
        hoverable
        style={{ width: 256 }}
        cover={<img alt={imageAlt} src={imageSrc} />}
      >
        <Card.Meta title={title} description={subtitle}></Card.Meta>
      </Card>
  );
}

export { AlbumCard };
