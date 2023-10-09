import { gql } from "graphql-request";

const HeroQuery = gql`
  query Hero {
    site(where: { id: "clnimn3cqj6gc0aw53ife2zxy" }) {
      hero {
        text
        localizations(locales: nl_NL) {
          text
        }
        image {
          url
        }
      }
    }
  }
`;

export default HeroQuery;
