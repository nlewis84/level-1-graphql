import React, { Component } from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

const testQuery = gql`
  query allPosts {
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

  return (
    <ul>
      {data.posts.map(({ id, title, body }) => (
        <li key={id}>
          <Link to={`/post/${id}`}>
            <p>
              {title}: {body}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

class Posts extends Component {
  render() {
    return (
      <div>
        <TestQuery />
      </div>
    );
  }
}

export default Posts;
