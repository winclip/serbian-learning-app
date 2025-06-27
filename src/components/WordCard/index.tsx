import { Card, Space, Typography } from "antd";
import type { IWord } from "../../types/models";
import styles from "./WordCard.module.scss";

const { Text } = Typography;

interface WordCardProps {
  word: IWord;
}

const WordCard = ({ word }: WordCardProps) => {
  return (
    <Card
      hoverable
      bordered={false}
      className={styles.card}
      bodyStyle={{ padding: "20px" }}
      headStyle={{ borderBottom: "none" }}
      title={
        <Space align="center">
          <span role="img" aria-label="serbian">
            🇷🇸
          </span>
          <Text strong className={styles.cardTitle}>
            {word.wordSr}
          </Text>
        </Space>
      }
    >
      <Space direction="vertical" size="small">
        <div>
          <Text className={styles.translationLabel}>
            Translation{" "}
            <span role="img" aria-label="english">
              🇬🇧
            </span>
            :
          </Text>
          <Text strong className={styles.translationText}>
            {word.wordEn}
          </Text>
        </div>
      </Space>
    </Card>
  );
};

export default WordCard;
