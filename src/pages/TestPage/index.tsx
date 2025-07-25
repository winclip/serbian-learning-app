import { useLocation } from "react-router-dom";
import { Spin, Typography, Row, Col, Button, Result, Progress } from "antd";
import { useState, useMemo } from "react";
import { useGetQuestionsQuery } from "../../api/apiSlice";
import type { IQuestion } from "../../types/models";
import TestResults from "../../components/TestResults";
import styles from "./TestPage.module.scss";

const { Title, Text } = Typography;

const TestPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const topicsParam: string = params.get("topics") || "";

  const {
    data: questions = [],
    isLoading,
    error,
  } = useGetQuestionsQuery({
    topicId: topicsParam,
  });

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);

  const currentQuestion: IQuestion | undefined = useMemo(
    () => questions[currentIndex],
    [questions, currentIndex]
  );

  const progressPercent = useMemo(
    () => Math.round(((currentIndex + 1) / questions.length) * 100),
    [currentIndex, questions.length]
  );

  const handleAnswer = (index: number) => {
    if (isAnswered || !currentQuestion) return;

    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentIndex] = index;
    setSelectedAnswers(updatedAnswers);
    setIsAnswered(true);

    setTimeout(() => {
      setIsAnswered(false);

      if (currentIndex < questions.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  const calculateScore = (): number => {
    return questions.reduce((score: number, q: IQuestion, i: number) => {
      return selectedAnswers[i] === q.answerIndex ? score + 1 : score;
    }, 0);
  };

  const resetTest = () => {
    setCurrentIndex(0);
    setSelectedAnswers([]);
    setIsAnswered(false);
    setShowResult(false);
  };

  if (isLoading) return <Spin size="large" />;

  if (error)
    return (
      <Result
        status="error"
        title="Error loading questions"
        subTitle="Please try again later"
      />
    );

  if (!questions || questions.length === 0)
    return (
      <Result
        status="info"
        title="No questions found"
        subTitle="Try another topic"
      />
    );

  if (!currentQuestion) return null;

  const isCorrect =
    selectedAnswers[currentIndex] === currentQuestion.answerIndex;
  const correctAnswer = currentQuestion.options[currentQuestion.answerIndex];

  return (
    <div className={styles.container}>
      <Title level={2}>Test on topic: </Title>
      <Progress percent={progressPercent} showInfo={false} />

      {showResult ? (
        <TestResults
          score={calculateScore()}
          totalQuestions={questions.length}
          onReset={resetTest}
        />
      ) : (
        <>
          <Title level={4}>
            Question {currentIndex + 1} of {questions.length}
          </Title>

          <div className={styles.questionBlock}>
            <Text strong className={styles.questionText}>
              {currentQuestion.questionText}
            </Text>
          </div>

          <Row gutter={[16, 16]}>
            {currentQuestion.options.map((option: string, index: number) => {
              const isOptionCorrect = index === currentQuestion.answerIndex;
              const isSelected = selectedAnswers[currentIndex] === index;

              return (
                <Col span={12} key={index}>
                  <Button
                    block
                    size="large"
                    onClick={() => handleAnswer(index)}
                    disabled={isAnswered}
                    className={`${styles.optionButton} ${
                      isAnswered
                        ? isOptionCorrect
                          ? styles.correct
                          : isSelected
                          ? styles.incorrect
                          : ""
                        : ""
                    }`}
                    onTouchStart={(e) =>
                      e.currentTarget.classList.add(styles.noTapHighlight)
                    }
                    onTouchEnd={(e) =>
                      e.currentTarget.classList.remove(styles.noTapHighlight)
                    }
                  >
                    {option}
                    {isAnswered && (isOptionCorrect || isSelected) && (
                      <span className={styles.answerIndicator}>
                        {isOptionCorrect ? "✓" : "✗"}
                      </span>
                    )}
                  </Button>
                </Col>
              );
            })}
          </Row>

          {isAnswered && (
            <div
              className={`${styles.feedback} ${
                isCorrect ? styles.success : styles.error
              }`}
            >
              {isCorrect
                ? "Correct!"
                : `Incorrect! Correct answer: ${correctAnswer}`}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default TestPage;
