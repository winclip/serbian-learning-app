import { useEffect, useRef, useState } from "react";
import { Typography } from "antd";
import styles from "./ProgressCircleProps.module.scss";
import { CIRCLE_CONFIG } from "../../constants";

const { Text } = Typography;

interface ProgressCircleProps {
  percentage: number;
  score: number;
  totalQuestions: number;
  radius?: number;
  strokeWidth?: number;
  gradientColors?: string[];
}

export const ProgressCircle: React.FC<ProgressCircleProps> = ({
  percentage,
  score,
  totalQuestions,
  radius = CIRCLE_CONFIG.radius,
  strokeWidth = CIRCLE_CONFIG.strokeWidth,
  gradientColors = CIRCLE_CONFIG.gradientColors,
}) => {
  const [progress, setProgress] = useState(0);
  const circleRef = useRef<SVGCircleElement>(null);
  const circumference = 2 * Math.PI * radius;
  const size = radius * 2 + strokeWidth;
  const center = size / 2;

  useEffect(() => {
    const duration = CIRCLE_CONFIG.animationDuration;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const currentPercentage = Math.floor(progress * percentage);

      setProgress(currentPercentage);

      if (circleRef.current) {
        const offset =
          circumference - (progress * percentage * circumference) / 100;
        circleRef.current.style.strokeDashoffset = offset.toString();
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [percentage, circumference]);

  return (
    <div className={styles.circleProgress}>
      <svg className={styles.progressRing} width={size} height={size}>
        <defs>
          <linearGradient
            id="progressGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor={gradientColors[0]} />
            <stop offset="100%" stopColor={gradientColors[1]} />
          </linearGradient>
        </defs>

        <circle
          className={styles.progressRingCircleBackground}
          stroke={CIRCLE_CONFIG.backgroundColor}
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={center}
          cy={center}
        />

        <circle
          ref={circleRef}
          className={styles.progressRingCircle}
          stroke="url(#progressGradient)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          fill="transparent"
          r={radius}
          cx={center}
          cy={center}
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
        />
      </svg>

      <div className={styles.progressText}>
        <Text strong className={styles.percentageText}>
          {progress}%
        </Text>
        <Text className={styles.scoreText}>
          {score} of {totalQuestions} correct
        </Text>
      </div>
    </div>
  );
};
