import { groq } from "next-sanity";

export const settingsQuery = groq`*[_id == 'settings' && _type == 'settings'][0]`;

export const homePageQuery = groq`*[_id == 'home' && _type == 'home'][0]`;

export const aboutPageQuery = groq`*[_id == 'about' && _type == 'about'][0]`;

export const contactQuery = groq`*[_id == 'contact' && _type == "contact"][0]`;

export const newsPageQuery = groq`*[_id == "news" && _type == "news"][0]`;

export const becomeAVipPageQuery = groq`*[_id == "becomeAVip" && _type == "becomeAVip"][0]`;

export const registerVipPageQuery = groq`*[_id == "registerVip" && _type == "registerVip"][0]`;

// AAA queries
export const coursesQuery = groq`*[_type == 'courses' && 'NAS' in coursePlatforms] | order(orderRank) {
  ...,
  courseTag->
}`;

export const newsQuery = groq`
{
  "categories": *[_type == "newsCategory"]{
    ...,
    "count": count(*[_type == "newsDetails" && references(^._id)])
  },

  "newsList": *[_type == "newsDetails" && 'NAS' in newsPlatforms] | order(date desc){
    ...,
    newsCategory->{
      ...
    },
    "plainContent": pt::text(content)
  },

  "totalNewsCount": count(*[_type == "newsDetails"])
}
`;

export const newsDetailQuery = groq`*[_type == "newsDetails" && slug.current == $slug][0]{
    ...,
}`;
