import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Research from "./pages/Research";
import Community from "./pages/Community";
import Buy from "./pages/Buy";
import Media from "./pages/Media";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";



function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/research" component={Research} />
          <Route exact path="/community" component={Community} />
          <Route exact path="/buy" component={Buy} />
          <Route exact path="/media" component={Media} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;