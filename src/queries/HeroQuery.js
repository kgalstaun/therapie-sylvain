import { gql } from "graphql-request";

const HeroQuery = gql`
  query Hero($locale: [Locale!]!) {
    site(where: { id: "clnimn3cqj6gc0aw53ife2zxy" }, locales: $locale) {
      hero {
        title
        image {
          url
        }
      }
    }
  }
`;

export default HeroQuery;
