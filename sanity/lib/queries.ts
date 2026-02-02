import { groq } from "next-sanity";

export const settingsQuery = groq`*[_id == 'settings' && _type == 'settings'][0]`;
