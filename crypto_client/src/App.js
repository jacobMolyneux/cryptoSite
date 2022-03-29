import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Homepage } from "./pages/homepage";
import { SignUpPage } from "./pages/signInPage";
import { LogInPage } from "./pages/loginPage";
import { NFTPage } from "./pages/NFTPage";
import Nav from "react-bootstrap/Nav";
export default function App() {
  return (
    <Router>
      <div>
        <Nav horizontal>
          <Nav.Item className="m-3">
            <Link to="/">Home</Link>
          </Nav.Item>
          <Nav.Item className="m-3">
            <Link to="/SignIn">Sign In</Link>
          </Nav.Item>
          <Nav.Item className="m-3">
            <Link to="/SignUp">Sign Up</Link>
          </Nav.Item>
          <Nav.Item className="m-3">
            <Link to="/NFT">Social Data</Link>
          </Nav.Item>
        </Nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/NFT">
            <NFTPage />
          </Route>
          <Route path="/SignIn">
            <LogInPage />
          </Route>
          <Route path="/SignUp">
            <SignUpPage />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
