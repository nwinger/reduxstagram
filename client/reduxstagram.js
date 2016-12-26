import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// Import css
import css from './styles/style.styl';

// Import Components
import App from './components/App';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

import store, { history } from './store';

const router = (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={PhotoGrid}></IndexRoute>
				<Route path="view/:postId" component={Single}></Route>
			</Route>
		</Router>
	</Provider>
);

render(router, document.getElementById('root'));