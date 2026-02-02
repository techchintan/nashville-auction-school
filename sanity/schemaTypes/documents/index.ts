import { course } from "./course";
import { settings } from "./settings";

export const singletons = [settings];
export const multiTypes = [course];
export const documents = [...singletons, ...multiTypes];
