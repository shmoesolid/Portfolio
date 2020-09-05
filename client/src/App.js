import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

import NoMatch from "./pages/NoMatch";

// function usePageViews() {
//   let location = useLocation();
//   React.useEffect( (ga) => {
//     ga.send(["pageview", location.pathname]);
//   }, [location]);
// }

function App() {

  return (
    <Router>
      <div className='body_wrapper'>
        <Nav />
        <Switch>
          <Route exact path="/" >
            <About />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
