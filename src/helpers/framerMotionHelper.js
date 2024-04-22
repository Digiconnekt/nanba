export const fadeInLeft = (duration = 1) => {
  return {
    hidden: {
      x: -80,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,

      transition: {
        type: "tween",
        duration: duration,
      },
    },
  };
};

export const fadeInRight = (duration = 1) => {
  return {
    hidden: {
      x: 80,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,

      transition: {
        type: "tween",
        duration: duration,
      },
    },
  };
};

export const fadeInTop = (duration = 1) => {
  return {
    hidden: {
      y: -80,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,

      transition: {
        type: "tween",
        duration: duration,
      },
    },
  };
};

export const fadeInBottom = (duration = 1) => {
  return {
    hidden: {
      y: 80,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,

      transition: {
        type: "tween",
        duration: duration,
      },
    },
  };
};
