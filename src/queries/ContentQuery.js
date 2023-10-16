import { gql } from "graphql-request";

const ContentQuery = gql`
  query Content($locale: [Locale!]!) {
    site(where: { id: "clnimn3cqj6gc0aw53ife2zxy" }, locales: $locale) {
      components {
        ... on Contact {
          id
          email
        }
        ... on Faq {
          id
          title
          items {
            id
          }
        }
        ... on TextDouble {
          title
          type
          textLeft {
            html
          }
          textRight {
            html
          }
        }
        ... on TextImage {
          type
          id
          title
          textRight
          text {
            html
          }
          image {
            url
          }
          videoUrl
        }
      }
    }
  }
`;
export default ContentQuery;
