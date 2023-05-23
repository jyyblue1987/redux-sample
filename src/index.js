import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';

import {reducers} from './reducers';
import rootSaga from './sagas';

import { Provider } from 'react-redux';

import reportWebVitals from './reportWebVitals';

const logger = createLogger();


const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers,
				applyMiddleware(sagaMiddleware, ReduxThunk, logger)
	);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
	
	<Provider store={store}>
		<App />
	</Provider>,
  	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
