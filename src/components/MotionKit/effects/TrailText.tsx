import { motion } from "framer-motion";

export const TrailText = ({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) => (
  <motion.div
    className={`inline-flex gap-1 overflow-hidden ${className}`}
    initial="hidden"
    animate="show"
    variants={{
      hidden: {},
      show: {
        transition: { staggerChildren: 0.04 },
      },
    }}
  >
    {text.split("").map((char, i) => (
      <motion.span
        key={i}
        variants={{
          hidden: { opacity: 0, y: 10 },
          show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
        }}
      >
        {char}
      </motion.span>
    ))}
  </motion.div>
);
