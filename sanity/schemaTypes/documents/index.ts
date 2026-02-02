import { course } from "./course";
import { home } from "./home";
import { settings } from "./settings";

export const singletons = [settings, home];
export const multiTypes = [course];
export const documents = [...singletons, ...multiTypes];
