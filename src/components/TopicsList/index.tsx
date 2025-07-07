import { List, Typography, Pagination, Result, Spin } from "antd";
import { useGetTopicsQuery } from "../../api/apiSlice";
import type { ITopic } from "../../types/models";
import styles from "./TopicsList.module.scss";
import { TopicCard } from "../TopicCard";
import { useState } from "react";
import { PAGINATION_SIZE_TOPICS } from "../../constants";

const { Title } = Typography;

export const TopicsList = () => {
  const { data: topics = [], isLoading, isError } = useGetTopicsQuery();
  const [currentPage, setCurrentPage] = useState(1);
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

  const currentData = topics.slice(
    (currentPage - 1) * PAGINATION_SIZE_TOPICS,
    currentPage * PAGINATION_SIZE_TOPICS
  );

  return (
    <div className={styles.container}>
      <Title level={2} className={styles.title}>
        Topics
      </Title>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 2,
          lg: 4,
          xl: 4,
          xxl: 4,
        }}
        dataSource={currentData}
        renderItem={(topic: ITopic) => (
          <List.Item>
            <TopicCard topic={topic} />
          </List.Item>
        )}
      />
      <div className={styles.pagination}>
        <Pagination
          current={currentPage}
          total={topics.length}
          pageSize={PAGINATION_SIZE_TOPICS}
          onChange={(page) => setCurrentPage(page)}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};
