import Header from "./components/Header";
import { Container } from "react-bootstrap";
import RegisterPerson from "./components/RegisterPerson";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TablePeople from "./components/TablePeopleReport";
import RegisterCity from "./components/RegisterCity";
import TableCity from "./components/TableCityReport";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Route path="/" exact component={Login} />
        <Route path="/registerperson" exact component={RegisterPerson} />
        <Route path="/registercity" exact component={RegisterCity} />
        <Route path="/reportpeople" exact component={TablePeople} />
        <Route path="/reportcity" exact component={TableCity} />
      </Container>
    </Router>
  );
}

export default App;
