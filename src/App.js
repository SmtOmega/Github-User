import Dashboard from './pages/Dashboard'
import Error from './pages/Error'
import Login from './pages/Login'
import PrivateRoute from './pages/PrivateRoute'
import AuthWrapper from './pages/AuthWrapper'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Switch>
          <PrivateRoute  path="/" exact>
            <Dashboard />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </AuthWrapper>
  );
}

export default App;
