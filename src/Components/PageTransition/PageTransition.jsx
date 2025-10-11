// components/PageTransition.js
import { motion } from "framer-motion";

const PageTransition = ({ children }) => {
  return (
    <motion.div
  initial={{ opacity: 0, x: "100vw" }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: "-100vw" }}
  transition={{
    type: "spring",
    stiffness: 90,
    damping: 20,
    mass: 0.8,
    opacity: { duration: 0.2 }
  }}
  className="min-vh-100 position-relative"
>
  {children}
</motion.div>


  );
};

export default PageTransition;
