export const zoomIn = (delay = 0) => ({
  hidden: { scale: 0.8, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      delay,
      duration: 0.4,
      ease: "easeOut",
    },
  },
});
