import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk';
import categories from './reducers/categories';
import recipes from './reducers/recipes';

const reducers = combineReducers({ categories, recipes, form: formReducer });				

export default createStore(
	reducers, 
	window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_(),
	applyMiddleware(thunk)
)