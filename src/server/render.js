import DocumentTitle from 'react-document-title';
import Html from './html.react';
import Promise from 'bluebird';
import React from 'react';
import Router from 'react-router';
import Location from 'react-router/lib/Location'
import config from './config';
import routes from '../client/routes';
import makeRedux from '../client/makeRedux';
import { Provider } from 'redux/react';

export default function render(req, res, locale) {
  return renderPage(res, req);
}

function renderPage(res, req) {
  const location = new Location(req.path, req.query);
  return new Promise((resolve,reject)=>{
    Router.run(routes, location, (err, initialState) => {
      console.log('INIT STATE',initialState);
      // const notFound = initialState.components.some(route => route.name === 'not-found');
      // const status = notFound ? 404 : 200;
      const redux = makeRedux(req);
      const Handler = (
        <Provider redux={redux}>
          {() => <Router location={location} {...initialState}/>}
        </Provider>
      );
      getPageHtml(Handler,redux).then((html)=>{
        res.send(html);
        resolve();
      });
    });
  });
}

function getPageHtml(Handler,redux) {
  //const appHtml = `<div id="app">${React.renderToString(<Handler />)}</div>`;
  React.renderToString(Handler);
  console.log('PROMISE COUNT: ',redux.promises.length);
  return new Promise.all(redux.promises).then(()=>{
    const bodyMarkup = React.renderToString(Handler);
    
    const appState = redux.getState();
    //console.log(appState);
    const appScriptSrc = config.isProduction
          ? '/build/app.js?v=' + config.version
          : '//' + require('../../devServerUrl') + ':8888/build/app.js';

    let scriptHtml = `
      <script>
        (function() {
          window._appState = ${JSON.stringify(appState)};
          var app = document.createElement('script'); app.type = 'text/javascript'; app.async = true;
          var src = '${appScriptSrc}';
          // IE<11 and Safari need Intl polyfill.
          if (!window.Intl) src = src.replace('.js', 'intl.js');
          app.src = src;
          var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(app, s);
        })();
      </script>`;

    if (config.isProduction && config.googleAnalyticsId !== 'UA-XXXXXXX-X')
      scriptHtml += `
        <script>
          (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
          function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
          e=o.createElement(i);r=o.getElementsByTagName(i)[0];
          e.src='//www.google-analytics.com/analytics.js';
          r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
          ga('create','${config.googleAnalyticsId}');ga('send','pageview');
        </script>`;

    const title = DocumentTitle.rewind();

    return '<!DOCTYPE html>' + React.renderToStaticMarkup(
      <Html
        bodyHtml={'<div id="content">'+bodyMarkup+'</div>' + scriptHtml}
        isProduction={config.isProduction}
        title="helo"
        version="0.0.0"
      />
    );
  });
}
