// const Scroll = (e) => {
//   const event = window.event || e;
//   const delta = event.detail ? event.detail * (-120) : event.wheelData;
//   $(spotList).scrollTop($(spotList).scrollTop() - delta);
// };
//
// const scrollFix = (scrollEl, fixedEl) => {
//   scrollEl = document.getElementById(scrollEl);
//   fixedEl = document.getElementById(fixedEl);
//   fixedEl.addEventListener("wheel", Scroll, false);
// };
//
// export default scrollFix;
export const scroller = (e) => {
  const delta = e.deltaY;
  console.log(delta);
};
