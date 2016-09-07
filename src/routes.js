
var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
//var Redirect = Router.Redirect;

var routes = (
    <Route name="app" path="/" handler={require('./components/app')}>
        <DefaultRoute handler={require('./components/homePage')} />
        <Route name="dsls" handler={require('./components/dsls/dslPage')} />
        <Route name="addDsl" path="dsl" handler={require('./components/dsls/manageDslPage')} />
        <Route name="manageDsl" path="dsl/:id" handler={require('./components/dsls/manageDslPage')}/>
        <NotFoundRoute handler={require('./components/notFoundPage')} />
    </Route>
);

module.exports = routes;