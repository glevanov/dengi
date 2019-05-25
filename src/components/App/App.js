import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { observer } from 'mobx-react';
import Overview from 'components/Overview';
import AddAccount from 'components/AddAccount';
import './App.css';

const App = observer(
  class App extends Component {
    render() {
      return (
        <div className={'app'}>
          <Router>
            <Route>
              <Switch>
                <Route>
                  <Route
                    exact
                    path="/"
                    component={() => <Overview />}
                  />
                  <Route
                    path="/add"
                    component={() => <AddAccount />}
                  />
                </Route>
              </Switch>
            </Route>
          </Router>
        </div>
      )
    }
  }
);

export default App;
