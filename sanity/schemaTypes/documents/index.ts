import { aboutPage } from "./about";
import { becomeAVip } from "./becomeAVip";
import { contact } from "./contact";
import { home } from "./home";
import { news } from "./news";
import { settings } from "./settings";

export const singletons = [
  settings,
  home,
  aboutPage,
  news,
  contact,
  becomeAVip,
];
export const multiTypes = [];
export const documents = [...singletons, ...multiTypes];
