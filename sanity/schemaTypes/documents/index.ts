import { aboutPage } from "./about";
import { contact } from "./contact";
import { course } from "./course";
import { home } from "./home";
import { news } from "./news";
import { newsCategory } from "./news/newsCategory";
import { newsDetails } from "./news/newsDetails";
import { settings } from "./settings";

export const singletons = [settings, home, aboutPage, news, contact];
export const multiTypes = [course, newsCategory, newsDetails];
export const documents = [...singletons, ...multiTypes];
