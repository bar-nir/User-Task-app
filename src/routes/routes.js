import React from "react"
import {Switch, Route, HashRouter} from "react-router-dom"
import * as pages from "../pages"
const routes = () => {
  return (
    <Switch>
      <Route path="/" component={pages.Home}></Route>
    </Switch>
  )
}

export default routes
