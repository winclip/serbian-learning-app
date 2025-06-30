import { Form, Input, Button, message } from "antd";
import { motion } from "framer-motion";
import { useState } from "react";
import styles from "./ContactForm.module.scss";
import type { IContactFormValues } from "../../types/models";
import { commentRules, emailRules, nameRules } from "../../constants";

const { TextArea } = Input;

const ContactForm = () => {
  const [form] = Form.useForm<IContactFormValues>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (values: IContactFormValues) => {
    try {
      setIsSubmitting(true);
      console.log("Submitted values:", values);


      message.success("Your message has been sent successfully!");
      form.resetFields();
    } catch (error) {
      console.error("Form submission error:", error);
      message.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className={styles.form}
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.8 }}
    >
      <Form<IContactFormValues>
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        requiredMark="optional"
      >
        <Form.Item label="Name" name="name" rules={nameRules}>
          <Input placeholder="Enter your name" />
        </Form.Item>

        <Form.Item label="Email" name="email" rules={emailRules}>
          <Input type="email" placeholder="Enter your email" />
        </Form.Item>

        <Form.Item label="Comment" name="comment" rules={commentRules}>
          <TextArea rows={5} placeholder="Enter your message" />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className={styles.submitButton}
            loading={isSubmitting}
            disabled={isSubmitting}
            size="large"
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </Button>
        </Form.Item>
      </Form>
    </motion.div>
  );
};

export default ContactForm;
