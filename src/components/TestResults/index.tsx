import { Typography, Button } from "antd";
import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TestResults.module.scss";
import { ProgressCircle } from "../ProgressCircleProps";

const { Title } = Typography;

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
  const navigate = useNavigate();
  const percentage = Math.round((score / totalQuestions) * 100);

  const goToExercises = () => {
    navigate("/exercises");
  };

  return (
    <div className={styles.resultsContainer}>
      <Title level={3} className={styles.title}>
        Test Results
      </Title>

      <ProgressCircle
        percentage={percentage}
        score={score}
        totalQuestions={totalQuestions}
      />

      <div className={styles.buttonsContainer}>
        <Button
          type="primary"
          className={styles.restartButton}
          onClick={onReset}
        >
          Restart Test
        </Button>
        <Button className={styles.exercisesButton} onClick={goToExercises}>
          Go to Exercises
        </Button>
      </div>
    </div>
  );
};
export default TestResults;
