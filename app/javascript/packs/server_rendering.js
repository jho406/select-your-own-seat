import React from 'react';
import { ApplicationBase } from '@jho406/breezy'
import SeatsIndex from 'views/seats/index'
import ReactDOMServer from 'react-dom/server';
require("source-map-support").install({
  retrieveSourceMap: filename => {
    return {
      url: filename,
      map: readSourceMap(filename)
    };
  }
});

// Mapping between your props template to Component, you must add to this
// to register any new page level component you create. If you are using the
// scaffold, it will auto append the identifers for you.
//
// e.g {'posts/new': PostNew}
const identifierToComponentMapping = {
  'seats/index': SeatsIndex,
  'seats/show': SeatsIndex,
};

export default class Application extends ApplicationBase {
  mapping() {
    return identifierToComponentMapping;
  }

  visitAndRemote(navRef, store) {
    return {visit: () => {}, remote: () => {}}
  }
}

setHumidRenderer((json) => {
  const initialState = JSON.parse(json)
  return ReactDOMServer.renderToString(
    <Application
      // baseUrl={origin}
      // The global var BREEZY_INITIAL_PAGE_STATE is set by your erb
      // template, e.g., index.html.erb
      initialPage={initialState}
      // The initial path of the page, e.g., /foobar
      // path={path}
    />
  )
})
