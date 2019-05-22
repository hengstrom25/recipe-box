import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import recipes from './reducers/recipesReducer';

/*const reducers = combineReducers({ recipes });*/


function myReducer(state=initialState, action) {
	return state
}
				

export default createStore(
	myReducer, 
	window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_(),
	applyMiddleware(thunk)
)