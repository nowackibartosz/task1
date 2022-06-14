import Home from "../Container/Home/Home";
import Task from "../Container/Task/Task";
import ContactMe from "../Container/ContactMe/ContactMe";

export const TOTAL_SCREENS = [
  {
    screen_name: "About me",
    component: Home,
  },
  {
    screen_name: "Task",
    component: Task,
  },

  {
    screen_name: "Contact",
    component: ContactMe,
  },
];

export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) return -1;
  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
  }
  return -1;
};
