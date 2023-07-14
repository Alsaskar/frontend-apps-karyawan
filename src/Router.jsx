import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
    </Switch>
  );
};

export default Router;
