import React from 'react';
import StudentForm from './components/StudentForm';
import StudentTable from './components/StudentsTable';
import StudentDetails from './components/StudentDetails';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//redux
import { Provider } from 'react-redux';
import store from './store';
function App() {
  
  return (
    <div className="App">
      <Provider store = {store}>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <StudentForm />
            </Route>
            <Route path="/page2">
              <StudentTable />
            </Route>
            <Route path="/page3/:id">
              <StudentDetails />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
