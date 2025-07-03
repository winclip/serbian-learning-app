import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tag, Button, Typography, Spin } from "antd";
import { useGetTopicsQuery } from "../../api/apiSlice";
import type { ITopic } from "../../types/models";

const { Title, Text } = Typography;

const TopicSelector: React.FC = () => {
  const { data: topics, isLoading } = useGetTopicsQuery();
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const navigate = useNavigate();

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
    <div
      style={{
        background: "#f9f9f9",
        borderRadius: 12,
        maxWidth: 800,
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <Title level={3}>Шта Вас интересује?</Title>
      <Text>Изаберите три или више тема</Text>

      <div style={{ marginTop: 24, marginBottom: 24 }}>
        {isLoading ? (
          <Spin />
        ) : (
          topics?.map((topic: ITopic) => (
            <Tag
              key={topic._id}
              color={selectedTopics.includes(topic._id) ? "blue" : "default"}
              style={{
                margin: 6,
                padding: "6px 12px",
                fontSize: 16,
                borderRadius: 20,
                cursor: "pointer",
              }}
              onClick={() => toggleTopic(topic._id)}
            >
              {topic.nameSr}/{topic.nameEn}
            </Tag>
          ))
        )}
      </div>

      <Button
        type="primary"
        size="large"
        disabled={selectedTopics.length < 1}
        onClick={handleContinue}
      >
        Настави
      </Button>
    </div>
  );
};

export default TopicSelector;
