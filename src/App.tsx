import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as reactRouterDom from "react-router-dom";
import { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react";
import SuperTokens from "supertokens-auth-react";
import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import Session from "supertokens-auth-react/recipe/session";

SuperTokens.init({
  appInfo: {
    appName: "supersheets",
    apiDomain: "http://localhost:3001",
    websiteDomain: "http://localhost:3000",
  },
  recipeList: [EmailPassword.init(), Session.init()],
});

export default function App() {
  return (
    <Router>
      <Switch>
        {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}
        <Route exact path="/">
          <EmailPassword.EmailPasswordAuth>
            <div>Hello there!</div>
          </EmailPassword.EmailPasswordAuth>
        </Route>
        <Route exact path="/foo">
          <EmailPassword.EmailPasswordAuth>
            <div>foo</div>
          </EmailPassword.EmailPasswordAuth>
        </Route>
      </Switch>
    </Router>
  );
}
