import { useParams } from "react-router-dom";

const TopicPage = () => {
  const { topicId } = useParams();

  return (
    <div className="topic-page">
      <h1>Topic Page</h1>
      <p>Selected topic: {topicId}</p>
    </div>
  );
};

export default TopicPage;
