import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import categories from './reducers/categories';
import recipes from './reducers/recipes';
import form from './reducers/form';

const reducers = combineReducers({ categories, recipes, form });				

/*export default createStore(
	reducers, 
	window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_(),
	applyMiddleware(thunk)
)*/

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(thunk)),
);

export default store