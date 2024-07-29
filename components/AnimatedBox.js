// components/AnimatedBox.js
import { motion } from "framer-motion";
import styled from "styled-components";

const MotionBox = styled(motion.div)`
  display: inline-block;
`;

const AnimatedBox = ({ children }) => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <MotionBox
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={variants}
    >
      {children}
    </MotionBox>
  );
};

export default AnimatedBox;
