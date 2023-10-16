import { request } from "graphql-request";

const QueryService = {
  async fetch(query, param) {
    const data = await request(
      "https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clnik9a2u093501uf5avp9yjq/master",
      query,
      param
    );
    return data;
  },
};

export default QueryService;
