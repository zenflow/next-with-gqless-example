import fetch from 'isomorphic-unfetch'
import { Client, QueryFetcher } from "gqless";
import { schema, Query } from "./generated";

const endpoint = "https://api.graph.cool/simple/v1/cixmkt2ul01q00122mksg82pn";

const fetchQuery: QueryFetcher = async (query, variables) => {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query,
      variables
    }),
    mode: "cors"
  });

  if (!response.ok) {
    throw new Error(`Network error, received status code ${response.status}`);
  }

  const json = await response.json();

  return json;
};

export const client = new Client<Query>(schema.Query, fetchQuery);

export const query = client.query;

export const createClient = (queryFetcher = fetchQuery) => new Client<Query>(schema.Query, queryFetcher);
