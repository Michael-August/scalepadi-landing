// // variants/fade.ts
// export const fadeIn = (
//   direction = "up",
//   type = "spring",
//   delay = 0,
//   duration = 0.75
// ) => {
//   return {
//     hidden: {
//       opacity: 0,
//       y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
//       x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
//     },
//     show: {
//       opacity: 1,
//       y: 0,
//       x: 0,
//       transition: {
//         type,
//         delay,
//         duration,
//         ease: "easeOut",
//       },
//     },
//   };
// };


// /MotionKit/variants/fade.ts
export const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.6, 0.3, 0.8],
    },
  },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.45, 0, 0.55, 1],
    },
  },
};

export const fadeInWParameter = (direction = "up", delay = 0) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        delay,
        duration: 0.6,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
  };
  return variants;
};
