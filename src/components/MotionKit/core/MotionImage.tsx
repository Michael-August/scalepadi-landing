import { motion } from "framer-motion";

type MotionImageProps = {
  src: string;
  alt: string;
  variants: any;
  className?: string;
  [key: string]: any;
};

export const MotionImage = ({
  src,
  alt,
  variants,
  className = "",
  ...rest
}: MotionImageProps) => (
  <motion.img
    src={src}
    alt={alt}
    variants={variants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    loading="lazy"
    className={className}
    {...rest}
  />
);
