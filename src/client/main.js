import React from 'react';
import Router from 'react-router';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import routes from './routes';
import makeRedux from './makeRedux';

import { Provider } from 'redux/react';

// Never render to body. Everybody updates it.
// https://medium.com/@dan_abramov/two-weird-tricks-that-fix-react-7cf9bbdef375
const insertionPoint = document.getElementById('content');
const history = new BrowserHistory();
const redux = makeRedux();
const topElement = (
	<Provider redux={redux}>
		{()=> <Router history={history} children={routes}/>}
	</Provider>
);

React.render(topElement,insertionPoint);

if (process.env.NODE_ENV !== "production") {
  window.React = React; // enable debugger
  const reactRoot = window.document.getElementById("content");

  if (!reactRoot || !reactRoot.firstChild || !reactRoot.firstChild.attributes || !reactRoot.firstChild.attributes["data-react-checksum"]) {
    console.error("Server-side React render was discarded. Make sure that your initial render does not contain any client-side code.");
  }
}

// // TODO: Report app errors.
// if ('production' === process.env.NODE_ENV) {
// }
