
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, withRouter} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import CategoryCard from './components/CategoryCard';
import RecipeBox from './containers/RecipeBox';
import RecipeIndex from './containers/RecipeIndex';
import RecipeCard from './components/RecipeCard';
import EditRecipeForm from './components/EditRecipeForm';
import Home from './components/Home';
import NewRecipeForm from './components/NewRecipeForm';
import NavBar from './components/NavBar';
		

class App extends Component {
	render() {
		return (
		<div>
				<div>
					<Switch>
						<Route exact path='/'/>
						<Route component={NavBar}/>
					</Switch>
					<Switch>
						<Route exact path='/' component={Home}/>
						<Route path='/recipebox' component={RecipeBox}/>
						<Route path='/category/:catid/newrecipe' render={props => {

						 		return (
						 			<NewRecipeForm {...props}/>
						 		)
						 	}}/>
						<Route path='/category/:catid' render={props => {
          					const {catid} = props.match.params;
          						return (
            						<CategoryCard id={parseInt(catid)} withAddButton="true"/>
          						)
        					}}/>
        				<Route path='/recipes/:rid/edit' render={props => {
						 	const {rid} = props.match.params;	
								return (
									<EditRecipeForm id={parseInt(rid)} history={props.history}/>
								)
							}}/>	
						<Route path='/recipes/:rid' render={props => {
						 	const {rid} = props.match.params;
						 		return (
						 			<RecipeCard id={parseInt(rid)} history={props.history}/>
						 		)
						 	}}/>
						 <Route path='/recipes' component={RecipeIndex}/>	

					</Switch>
				</div>
		</div>
		)
	}
};
		



export default withRouter(App);


