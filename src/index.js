import React from "react";
import { render } from "react-dom";
import { ApolloProvider } from "@apollo/client/react";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { useQuery, gql } from "@apollo/client";
import "./App.css";

const client = new ApolloClient({
  uri: "https://api-us-east-1.graphcms.com/v2/ckpdeursngjul01w60onr6d6q/master",
  cache: new InMemoryCache(),
});

const testQuery = gql`
  {
    posts {
      id
      title
      body
      createdAt
    }
  }
`;

function TestQuery() {
  const { loading, error, data } = useQuery(testQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.posts.map(({ id, title, body }) => (
    <div key={id}>
      <p>
        {title}: {body}
      </p>
    </div>
  ));
}

function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <TestQuery />
    </div>
  );
}

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

// test
