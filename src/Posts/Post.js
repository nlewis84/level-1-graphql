import React, { Component } from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";

const postQuery = gql`
  query post($id: ID!) {
    post(where: { id: $id }) {
      id
      title
      body
    }
  }
`;

function PostQuery() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(postQuery, {
    variables: { id: id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h1>{data.post.title}</h1>
      <p>{data.post.body}</p>
    </div>
  );
}

class Post extends Component {
  render() {
    return (
      <div>
        <PostQuery />
      </div>
    );
  }
}

export default Post;
