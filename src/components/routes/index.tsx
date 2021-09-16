import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../../containers/Home';
import Appointment from '../../containers/Appointment';
import Staff from '../../containers/Staff';
import Report from '../../containers/Report';
import Auth from '../../containers/Auth';
import Error from '../../components/Error';
import locale from '../../locale';
import { ROUTES } from '../../constants/routes';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.home} component={Home} />
        <Route exact path={ROUTES.appointment} component={Appointment} />
        <Route exact path={ROUTES.staff} component={Staff} />
        <Route exact path={ROUTES.report} component={Report} />
        <Route exact path={ROUTES.auth} component={Auth} />
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

export default Routes;
