import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import Login from "./view/login";
import Main from "./view/main";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={Login} exact />
      <Route path="/dev/:id" component={Main} />
    </BrowserRouter>
  );
}
