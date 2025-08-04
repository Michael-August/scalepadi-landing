import { motion } from "framer-motion";

export const MotionText = ({
  text,
  variants,
  initial = "hidden",
  animate = "show",
  transition,
  as = "p",
  className = "",
  children,
  ...rest
}: {
  text?: string;
  variants?: any;
  initial?: any;
  animate?: any;
  transition?: any;
  as?: keyof typeof motion;
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}) => {
  const Component = motion[as];

  return (
    <Component
      variants={variants}
      initial={initial}
      animate={animate}
      transition={transition}
      whileInView="show"
      viewport={{ once: true }}
      className={className}
      {...rest}
    >
      {text || children}
    </Component>
  );
};
