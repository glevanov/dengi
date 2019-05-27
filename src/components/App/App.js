import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { observer } from 'mobx-react';
import Overview from 'components/Overview';
import EditForm from 'components/EditForm';
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
                    render={() => <Overview />}
                  />
                  <Route
                    path="/add"
                    render={() => <EditForm />}
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
