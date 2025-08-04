export const slideIn = (
  direction: "left" | "right" | "up" | "down" = "left",
  delay = 0
) => {
  const offset = 50;
  const x = direction === "left" ? -offset : direction === "right" ? offset : 0;
  const y = direction === "up" ? -offset : direction === "down" ? offset : 0;

  return {
    hidden: { opacity: 0, x, y },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay,
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };
};
