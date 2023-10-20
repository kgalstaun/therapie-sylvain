import { gql } from "graphql-request";

const MetaQuery = gql`
  query Meta($locale: [Locale!]!) {
    meta(where: { id: "clnsknpt2pdjc0bw25zqu77e3" }, locales: $locale) {
      title
      description
    }
  }
`;

export default MetaQuery;
