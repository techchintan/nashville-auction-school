import { groq } from "next-sanity";

export const settingsQuery = groq`*[_id == 'settings' && _type == 'settings'][0]`;

export const homePageQuery = groq`*[_id == 'home' && _type == 'home'][0]`;
