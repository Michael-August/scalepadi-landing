import { motion } from "framer-motion";
import { staggerContainer } from "../variants/stagger";

export const MotionSection = ({
  children,
  className = "",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) => (
  <motion.section
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
    className={className}
    {...props}
  >
    {children}
  </motion.section>
);
