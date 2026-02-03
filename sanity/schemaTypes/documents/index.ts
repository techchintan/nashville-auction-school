import { aboutPage } from "./about";
import { course } from "./course";
import { home } from "./home";
import { settings } from "./settings";

export const singletons = [settings, home, aboutPage];
export const multiTypes = [course];
export const documents = [...singletons, ...multiTypes];
