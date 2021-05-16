import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import SignIn from "src/components/SignIn/SignIn";
import SignUp from "src/components/SignUp/SignUp";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/sign-up" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
