import { motion } from 'framer-motion';

const animations = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -15 }
};

export const PageTransition = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }}
      style={{ width: '100%', minHeight: '80vh' }}
    >
      {children}
    </motion.div>
  );
};
export default PageTransition;
