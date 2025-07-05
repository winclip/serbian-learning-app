import { useSelector } from "react-redux";
import { Typography, Row, Col, Empty } from "antd";
import type { RootState } from "../../store/store";
import WordCard from "../../components/WordCard";

const { Title } = Typography;

const StudyPage = () => {
  const learnedWords = useSelector(
    (state: RootState) => state.learnedWords.words
  );

  return (
    <section style={{ padding: "24px" }}>
      <Title level={3} style={{ textAlign: "center", marginBottom: "24px" }}>
        Words to Study
      </Title>

      {learnedWords.length === 0 ? (
        <Empty description="No words added to study yet." />
      ) : (
        <Row gutter={[16, 16]}>
          {learnedWords.map((word) => (
            <Col key={word._id} xs={24} sm={12} md={8} lg={6}>
              <WordCard word={word} />
            </Col>
          ))}
        </Row>
      )}
    </section>
  );
};

export default StudyPage;
