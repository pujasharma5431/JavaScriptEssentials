import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home";
import Jobs from "./Jobs";
import Messages from "./Messages";
import MyNetwork from "./MyNetwork";
import Notifications from "./Notifications";

export default function Change() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/messages">Messages</Link>
            </li>
            <li>
              <Link to="/notifications">Notifications</Link>
            </li>
            <li>
              <Link to="/networks">networks</Link>
            </li>
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/messages">
            <Messages />
          </Route>
          <Route path="/notifications">
            <Notifications />
          </Route>
          <Route path="/networks"><MyNetwork/>
          </Route>
          <Route path="/jobs"><Jobs/>
          </Route>
          <Route path="/">
           <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
