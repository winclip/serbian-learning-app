import { useLocation } from "react-router-dom";
import { Spin, List, Typography } from "antd";
import { useGetQuestionsQuery } from "../../api/apiSlice";

const { Title, Text } = Typography;

const TestPage = () => {
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const topicsParam = params.get("topics") || "";

  const {
    data: questions,
    isLoading,
    error,
  } = useGetQuestionsQuery({
    topicId: topicsParam,
    sort: "asc",
  });

  if (isLoading) return <Spin tip="Загрузка вопросов..." />;
  if (error) return <Text type="danger">Ошибка загрузки вопросов</Text>;

  return (
    <div style={{ padding: "24px" }}>
      <Title level={2}>Тест по темам: {topicsParam}</Title>
      {questions && questions.length > 0 ? (
        <List
          bordered
          dataSource={questions}
          renderItem={(q) => (
            <List.Item>
              <Text>{q.questionText}</Text>
            </List.Item>
          )}
        />
      ) : (
        <Text>Вопросы не найдены</Text>
      )}
    </div>
  );
};

export default TestPage;
