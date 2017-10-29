
export const scroller = (e) => {
  const that = e.currentTarget;
  const delta = e.wheelDelta ? e.wheelDelta : (e.deltaY * -10);
  console.log("main scrolltop:", that.scrollTop);
  console.log("minus wheel delta:", delta);
  that.scrollTop = (that.scrollTop - delta);
  console.log("is", that.scrollTop);
};
