
export const scroller = (e) => {
  const that = e.currentTarget;
  const delta = e.wheelDelta;
  that.scrollTop = that.scrollTop - (delta);
};
