import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Appointment from './containers/Appointment';
import Staff from './containers/Staff';
import Report from './containers/Report';
import Auth from './containers/Auth';
import Error from './components/Error';
import locale from './locale';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/appointments" component={Appointment} />
        <Route exact path="/staff" component={Staff} />
        <Route exact path="/report" component={Report} />
        <Route exact path="/auth" component={Auth} />
        <Route
          exact
          path="*"
          render={(props) => (
            <Error {...props} message={locale.eng.pageNotFound} />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
