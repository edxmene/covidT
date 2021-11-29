import Header from "./components/Header";
import { Container } from "react-bootstrap";
import RegisterPerson from "./components/RegisterPerson";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Route path="/registerperson" exact component={RegisterPerson} />
      </Container>
    </Router>
  );
}

export default App;
