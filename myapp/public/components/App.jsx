import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

//custom pages
import MainApp from './MainApp.jsx';
import Dashboard from './Dashboard.jsx';
import Settings from './Settings.jsx';
import ParentComponent from './ParentComponent.jsx';

  ReactDOM.render(
	<MuiThemeProvider>
	<Router history ={hashHistory}>
	<Route path="/" component={ParentComponent}>
		<Route path="/dashboard" component={Dashboard} />
		<Route path="/settings" component={Settings} />
		<IndexRoute component={MainApp} />
	</Route>
	</Router>
	</MuiThemeProvider>,
 document.getElementById('root'));
