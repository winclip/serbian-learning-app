import { Card, Space, Typography, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import type { IWord } from "../../types/models";
import type { RootState } from "../../store/store";
import {
  addWord,
  removeWord,
} from "../../features/learnedWords/learnedWordsSlice";
import styles from "./WordCard.module.scss";

const { Text } = Typography;

interface WordCardProps {
  word: IWord;
}

const WordCard = ({ word }: WordCardProps) => {
  const dispatch = useDispatch();

  const learnedWords = useSelector(
    (state: RootState) => state.learnedWords.words
  );
  const isLearned = learnedWords.some((w) => w._id === word._id);

  const handleClick = () => {
    if (isLearned) {
      dispatch(removeWord(word._id));
    } else {
      dispatch(addWord(word));
    }
  };

  return (
    <Card
      hoverable
      className={styles.card}
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
      <Space direction="vertical" size="small" style={{ width: "100%" }}>
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

        <Button
          type={isLearned ? "default" : "primary"}
          danger={isLearned}
          block
          onClick={handleClick}
        >
          {isLearned ? "Remove from Study" : "Add to Study"}
        </Button>
      </Space>
    </Card>
  );
};

export default WordCard;
