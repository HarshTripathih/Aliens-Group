export const leftLineVariant = {
  hidden: { width: 0 },
  visible: {
    width: '16%',
    transition: { duration: 0.6 },
  },
};

export const rightLineVariant = {
  hidden: { width: 0 },
  visible: {
    width: '16%',
    transition: { duration: 0.6 },
  },
};

export const revealLeftVariant = {
  hidden: { scaleX: 1, originX: 0 },
  visible: {
    scaleX: 0,
    originX: 0,
    transition: { duration: 2, ease: 'easeInOut' },
  },
};

export const revealRightVariant = {
  hidden: { scaleX: 1, originX: 1 },
  visible: {
    scaleX: 0,
    originX: 1,
    transition: { duration: 2, ease: 'easeInOut' },
  },
};
