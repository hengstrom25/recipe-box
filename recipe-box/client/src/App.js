//import React from 'react';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import CategoryCard from './components/CategoryCard';
import RecipeBox from './components/RecipeBox';
import RecipeCard from './components/RecipeCard';
import RecipeForm from './components/RecipeForm';
import EditRecipe from './components/EditRecipe';
import Home from './components/Home';
import NewRecipe from './components/NewRecipe';
import NavBar from './components/nav/NavBar';

const data = {
	categories: [
		{name: "Salads", id: 0,
			recipes: [ 0, 1 ] },
		{name: "Desserts", id: 1,
			recipes: [ 2 ] } ],
	recipes: [
		{name: "Mom's Tossed Salad", id: 0, category_id: 0,
		 recipe_field: "http://greatcooks.com/blah/123",
		 notes: "This is a good salad"},
		{name: "Dad's Potato Salad", id: 1, category_id: 0,
		 recipe_field: "http://goodstuff.com/abc/456",
		 notes: "Many calories"},
		{name: "Chocolate Cake", id: 2, category_id: 1, 
		 recipe_field: "http://easybake.com/xyz/999",
		 notes: "Love it"}
	]
};
		

class App extends Component {
	render() {
		return (
		<div>
			<Router>
				<div>
					<NavBar />
					<Switch>
						<Route exact path='/' component={Home}/>
						<Route path='/recipebox' component={RecipeBox}/>
						<Route path='/category/:catid/newrecipe' render={props => {
						 	const {catid} = props.match.params;
						 		return (
						 			<NewRecipe category_id={catid}/>
						 		)
						 	}}/>
						<Route path='/category/:catid' render={props => {
          					const {catid} = props.match.params;
          						return (
            						<CategoryCard id={catid}/>
          						)
        					}}/>
						<Route path='/recipe/:rid' render={props => {
						 	const {rid} = props.match.params;
						 		return (
						 			<RecipeCard id={rid}/>
						 		)
						 	}}/>
						 <Route path='/recipe/edit/:rid' render={props => {
						 	const {rid} = props.match.params;	
								return (
									<EditRecipe id={rid}/>
								)
							}}/>
					</Switch>
				</div>
			</Router>
		</div>
		)
	}
};
		



export default App;


