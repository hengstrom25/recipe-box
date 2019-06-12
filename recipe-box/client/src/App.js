
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
						 			<NewRecipe category_id={parseInt(catid)}/>
						 		)
						 	}}/>
						<Route path='/category/:catid' render={props => {
          					const {catid} = props.match.params;
          						return (
            						<CategoryCard id={parseInt(catid)}/>
          						)
        					}}/>
        				<Route path='/recipe/edit/:rid' render={props => {
						 	const {rid} = props.match.params;	
								return (
									<EditRecipe id={parseInt(rid)}/>
								)
							}}/>	
						<Route path='/recipe/:rid' render={props => {
						 	const {rid} = props.match.params;
						 		return (
						 			<RecipeCard id={parseInt(rid)}/>
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


