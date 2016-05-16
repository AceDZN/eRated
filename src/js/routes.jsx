var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;

var App = require('./components/app');
module.exports = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path=":sha" component={App} />
    </Route>
  </Router>
)
