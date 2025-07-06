import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tag, Button, Typography, Spin, Result } from "antd";
import { useGetTopicsQuery } from "../../api/apiSlice";
import type { ITopic } from "../../types/models";
import styles from "./TopicSelector.module.scss";

const { Title, Text } = Typography;

const TopicSelector: React.FC = () => {
  const { data: topics, isLoading, isError } = useGetTopicsQuery();
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const navigate = useNavigate();

  if (isLoading)
    return (
      <Spin size="large" style={{ display: "block", margin: "100px auto" }} />
    );

  if (isError)
    return (
      <Result
        status="error"
        title="Greška pri učitavanju tema"
        subTitle="Molimo pokušajte kasnije"
      />
    );

  const toggleTopic = (id: string) => {
    setSelectedTopics((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  };

  const handleContinue = () => {
    const query = selectedTopics.join(",");
    navigate(`/exercises/test?topics=${query}`);
  };

  return (
    <div className={styles.container}>
      <Title level={3} className={styles.title}>
        What are you interested in?
      </Title>
      <Text>Select three or more topics</Text>

      <div className={styles.tagsWrapper}>
        {topics?.map((topic: ITopic) => (
          <Tag
            key={topic._id}
            color={selectedTopics.includes(topic._id) ? "blue" : "default"}
            className={styles.tag}
            onClick={() => toggleTopic(topic._id)}
          >
            {topic.nameSr}/{topic.nameEn}
          </Tag>
        ))}
      </div>

      <Button
        type="primary"
        size="large"
        disabled={selectedTopics.length < 1}
        onClick={handleContinue}
      >
        Continue
      </Button>
    </div>
  );
};

export default TopicSelector;
