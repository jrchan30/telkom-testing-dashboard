import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeDashboard from './pages/home';
import AddDashboardWidget from './pages/addDashboardWidget';
import NavigationHeader from './components/NavigationHeader';

const App = () => {
  return (
    <div>
      <Router>
        <NavigationHeader />
        <Switch>
          <Route exact path="/">
            <HomeDashboard />
          </Route>
          <Route path="/add-dashboard-widget">
            <AddDashboardWidget />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
