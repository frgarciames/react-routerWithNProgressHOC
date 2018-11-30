import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";
import "nprogress/nprogress.css";

import { withNProgress } from "./withNProgress";

const Index = () => <h2>Index</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

const IndexWithNProgress = withNProgress(Index);
const AboutWithNProgress = withNProgress(About);
const UsersWithNProgress = withNProgress(Users);

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            justifyContent: "space-around"
          }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/users/">Users</Link>
          </li>
        </ul>
      </nav>
      <Route path="/" exact component={IndexWithNProgress} />
      <Route path="/about/" component={AboutWithNProgress} />
      <Route path="/users/" component={UsersWithNProgress} />
    </div>
  </Router>
);

ReactDOM.render(<AppRouter />, document.getElementById("root"));
