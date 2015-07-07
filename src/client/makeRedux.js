import { createRedux, createDispatcher, composeStores } from 'redux';
import * as stores from './stores';
import ApiClient from './ApiClient';
import makeMiddleware from './promiseMiddleware';

export default function makeRedux(req){
  let redux;
  const store = composeStores(stores);
  const apiClient = new ApiClient(req);
  const writeToRedux = function(promise){
    redux.promises.push(promise);
  }
  const dispatcher = createDispatcher(store, [makeMiddleware(apiClient,writeToRedux)]);  //specify middleware around dispatch

  if (__SERVER__){
    redux = createRedux(dispatcher);
    redux.promises = [];        //init promises for ss rendering;
  } else {
    redux = createRedux(dispatcher,window._appState);  //load stores with data
  }

  return redux;
}


