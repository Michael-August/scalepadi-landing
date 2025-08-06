import { motion } from "framer-motion";

export const MotionDiv = ({
  children,
  variants,
  className = "",
  ...rest
}: {
  children: React.ReactNode;
  variants: any;
  className?: string;
  [key: string]: any;
}) => (
  <motion.div
    variants={variants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    className={className}
    {...rest}
  >
    {children}
  </motion.div>
);
