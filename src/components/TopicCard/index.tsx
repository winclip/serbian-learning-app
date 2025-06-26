import { Card, Typography } from "antd";
import { Link } from "react-router-dom";
import type { ITopic } from "../../types/models";
import styles from "./TopicCard.module.scss";

const { Paragraph } = Typography;

interface TopicCardProps {
  topic: ITopic;
}

export const TopicCard = ({ topic }: TopicCardProps) => {
  const { _id: topicId, nameSr, nameEn } = topic;

  return (
    <Link
      to={`/dictionary/${topicId}`}
      className={styles.cardLink}
      aria-label={`View ${nameSr} topic`}
    >
      <Card hoverable className={styles.card} title={nameSr}>
        <Paragraph className={styles.cardParagraph}>{nameEn}</Paragraph>
      </Card>
    </Link>
  );
};
