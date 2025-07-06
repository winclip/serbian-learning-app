import React from "react";
import { Button, Col, Row, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "./NotFoundPage.module.scss";

const { Title, Paragraph } = Typography;

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Row className={styles.container}>
      <Col>
        <Title level={1} className={styles.title}>
          404 — Page Not Found
        </Title>
        <Paragraph className={styles.description}>
          Unfortunately, the page you're looking for doesn't exist.
        </Paragraph>
        <Button type="primary" onClick={() => navigate("/")}>
          Go to Home
        </Button>
      </Col>
      <Col className={styles.imageWrapper}>
        <img src="/images/errorImg.svg" alt="404" className={styles.image} />
      </Col>
    </Row>
  );
};

export default NotFoundPage;
