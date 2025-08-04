import { motion } from "framer-motion";

export const PulseOnHover = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
    className={className}
  >
    {children}
  </motion.div>
);
