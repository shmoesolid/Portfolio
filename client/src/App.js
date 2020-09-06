import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Col, Row, Container } from "./components/Grid";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";

import "./style.css";

function App() {

  return (
    <Router>
      <div className='body_wrapper text-center'>
        <Nav />
        <main>
          <Container>
            <Row>
              <Col size="md-12">
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
              </Col>
            </Row>
          </Container>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
