import { Typography, Space, Button } from "antd";
import type { FC } from "react";

const { Title, Text } = Typography;

interface TestResultsProps {
  score: number;
  totalQuestions: number;
  onReset: () => void;
}

const TestResults: FC<TestResultsProps> = ({
  score,
  totalQuestions,
  onReset,
}) => {
  return (
    <Space direction="vertical" size="large" style={{ width: "100%" }}>
      <Title level={3}>Test Results</Title>
      <Text strong style={{ fontSize: 18 }}>
        Correct answers: {score} of {totalQuestions} (
        {Math.round((score / totalQuestions) * 100)}%)
      </Text>
      <Button type="primary" onClick={onReset}>
        Restart Test
      </Button>
    </Space>
  );
};

export default TestResults;
