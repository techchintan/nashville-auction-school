import { aboutPage } from "./about";
import { becomeAVip } from "./becomeAVip";
import { contact } from "./contact";
import { home } from "./home";
import { news } from "./news";
import { registerVip } from "./register-vip";
import { settings } from "./settings";

export const singletons = [
  settings,
  home,
  aboutPage,
  news,
  contact,
  becomeAVip,
  registerVip,
];
export const multiTypes = [];
export const documents = [...singletons, ...multiTypes];
