import { scroller } from '../util/scroll_util';

export const ADD_GLOBAL_SCROLL = "ADD_GLOBAL_SCROLL";
export const REMOVE_GLOBAL_SCROLL = "REMOVE_GLOBAL_SCROLL";



export const addGlobalScroll = () => {
  let main = document.querySelector('main');
  main.addEventListener("wheel", scroller, true);
  return {
    type: ADD_GLOBAL_SCROLL
  };
};

export const removeGlobalScroll = () => {
  let main = document.querySelector('main');
  main.removeEventListener("wheel", scroller, true);
  return {
    type: REMOVE_GLOBAL_SCROLL
  };
};
