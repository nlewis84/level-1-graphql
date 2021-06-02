import React from "react";
import { render } from "react-dom";
import { ApolloProvider } from "@apollo/client/react";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import "./App.css";
import Post from "./Posts/Post.js";
import Posts from "./Posts/Posts.js";
import NewPost from "./Posts/NewPost.js";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const client = new ApolloClient({
  uri: "https://api-us-east-1.graphcms.com/v2/ckpdeursngjul01w60onr6d6q/master",
  cache: new InMemoryCache(),
});

// function App() {
//   return (
//     <div>
//       <h2>My first Apollo app 🚀</h2>
//     </div>
//   );
// }

render(
  <ApolloProvider client={client}>
    <Router>
      <Link to={"/"}>
        <h1 className="App-title">GraphQL is GREAT!</h1>
      </Link>

      <Link to={"/post/new"}>New Post</Link>
      <Switch>
        <Route exact path="/" component={Posts} />
        <Route exact path="/post/new" component={NewPost} />
        <Route path="/post/:id" component={Post} />
      </Switch>
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);
