import { Row, Col, Typography, Divider, Spin, Alert } from "antd";
import { useParams } from "react-router-dom";
import { useGetWordsQuery } from "../../api/apiSlice";
import type { IWord } from "../../types/models";
import styles from "./WordsList.module.scss";
import WordCard from "../WordCard";

const { Title, Text } = Typography;

const WordsList = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const {
    data: words = [],
    isLoading,
    isError,
  } = useGetWordsQuery({ topicId }, { skip: !topicId });

  if (!topicId) {
    return <Alert message="Topic ID is not selected" type="warning" showIcon />;
  }

  if (isLoading) {
    return (
      <div className={styles.loadingSpinner}>
        <Spin size="large" />
      </div>
    );
  }

  if (isError) {
    return (
      <Alert
        message="Failed to load"
        description="Could not fetch the list of words"
        type="error"
        showIcon
      />
    );
  }

  return (
    <section>
      <Title level={3} className={styles.title}>
        Words in This Topic
      </Title>
      <Text type="secondary" className={styles.subtitle}>
        Total words: {words.length}
      </Text>
      <Divider />

      <Row gutter={[16, 16]}>
        {words.map((word: IWord) => (
          <Col xs={24} sm={12} md={8} lg={6} key={word._id}>
            <WordCard word={word} />
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default WordsList;
