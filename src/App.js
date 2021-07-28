import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavigationHeader from './components/NavigationHeader';
import Footer from './components/Footer';
import HomeDashboard from './pages/home';
import CustomDashboard from './pages/customDashboard';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createTheme({
  typography: {
    fontFamily: ['Quicksand', 'sans-serif'].join(','),
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Router>
          <NavigationHeader />
          <Switch>
            <Route exact path="/">
              <HomeDashboard />
            </Route>
            <Route path="/custom-dashboard">
              <CustomDashboard />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
