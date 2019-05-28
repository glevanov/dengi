import React, {Component} from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import {observer} from 'mobx-react';
import Overview from 'components/Overview';
import EditForm from 'components/EditForm';
import './variables.css';
import './page.css';
import './App.css';
import 'normalize.css';

const App = observer(
  class App extends Component {
    render() {
      return (
        <div className="app">
          <Router>
            <Switch>
              <Route
                exact
                path="/"
                component={Overview}
              />
              <Route
                path="/add"
                component={EditForm}
              />
              <Route
                path="/edit/:index"
                component={EditForm}
              />
            </Switch>
          </Router>
        </div>
      )
    }
  }
);

export default App;
