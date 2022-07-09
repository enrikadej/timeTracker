import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './App';
import { store } from './store';
import 'bulma/css/bulma.min.css';

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>,
   document.getElementById('root'),
);
