import { motion } from "framer-motion";
import styles from "./ContactsSection.module.scss";
import ContactForm from "../ContactForm";

const ContactsSection = () => {
  return (
    <motion.section
      className={styles.contacts}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.container}>
        <motion.div
          className={styles.contactInfo}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h2 className={styles.heading}>Contact the Developer</h2>

          <div className={styles.contactDetails}>
            <p>
              <strong>Website:</strong>{" "}
              <a
                href="https://www.winclip.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                www.winclip.dev
              </a>
            </p>

            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:winclip.dew@gmail.com" className={styles.link}>
                winclip.dew@gmail.com
              </a>
            </p>
          </div>

          <div className={styles.contactImageWrapper}>
            <img
              src="images/serbDict.svg"
              alt="Contact illustration"
              className={styles.contactImage}
            />
          </div>
        </motion.div>

        <ContactForm />
      </div>
    </motion.section>
  );
};

export default ContactsSection;
