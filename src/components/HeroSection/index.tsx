import { motion } from "framer-motion";
import styles from "./HeroSection.module.scss";
import { heroVocabulary } from "../../constants";

const HeroSection = () => {
  return (
    <motion.section
      className={styles.hero}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.heroContent}>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className={styles.textContent}
        >
          <motion.h1
            className={styles.gradientHeading}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            Speak Serbian Like a Native
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className={styles.subtitle}
          >
            Interactive language learning for English speakers
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className={styles.ctaContainer}
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.25)",
              }}
              whileTap={{ scale: 0.95 }}
              className={styles.ctaButton}
            >
              Start Learning Free
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.visualContent}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <img src="images/heroImg.svg" alt="Language visual" />
          <motion.div
            className={`${styles.floatingCircle} ${styles.primary}`}
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ position: "absolute" }}
          />
          <motion.div
            className={`${styles.floatingCircle} ${styles.secondary}`}
            animate={{ y: [0, 20, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            style={{ position: "absolute" }}
          />
        </motion.div>
      </div>
      <div className={styles.scrollingBanner}>
        <motion.div
          className={styles.scrollingContent}
          animate={{ x: ["-100%", "0%"] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...heroVocabulary, ...heroVocabulary].map((word, index) => (
            <div key={index} className={styles.wordCard}>
              <span>{word.serbian}</span>
              <span className={styles.translation}>{word.english}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
