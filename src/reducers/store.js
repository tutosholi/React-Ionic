import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import predictionReducer from './PredictionReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const rootReducer = combineReducers({
   predictionReducer
});

export default createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));