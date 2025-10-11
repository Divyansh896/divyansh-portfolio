// Components/TransitionOverlay/TransitionOverlay.jsx
import { motion } from "framer-motion";

const TransitionOverlay = () => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-100 h-100 bg-dark"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 5, ease: "easeInOut" }}
      style={{ zIndex: 9999, pointerEvents: "none" }}
    />
  );
};

export default TransitionOverlay;
