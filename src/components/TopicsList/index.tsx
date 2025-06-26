import { List, Typography } from "antd";
import { useGetTopicsQuery } from "../../api/apiSlice";
import type { ITopic } from "../../types/models";
import styles from "./TopicsList.module.scss";
import { TopicCard } from "../TopicCard";

const { Title } = Typography;

export const TopicsList = () => {
  const { data: topics = [], isLoading, isError } = useGetTopicsQuery();

  if (isLoading) return <div>Loading topics...</div>;
  if (isError) return <div>Error </div>;

  return (
    <>
      <Title level={2} className={styles.title}>
        Topics
      </Title>

      <List
        grid={{ gutter: 26, column: 4 }}
        dataSource={topics}
        renderItem={(topic: ITopic) => (
          <List.Item>
            <TopicCard topic={topic} />
          </List.Item>
        )}
      />
    </>
  );
};
