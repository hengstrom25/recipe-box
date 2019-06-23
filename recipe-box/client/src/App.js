
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import CategoryCard from './containers/CategoryCard';
import RecipeBox from './components/RecipeBox';
import RecipeCard from './containers/RecipeCard';
import EditRecipeForm from './components/NewNewEditRecipeForm';
import Home from './components/Home';
import NewRecipeForm from './components/NewRecipeForm';
import NavBar from './containers/NavBar';
		

class App extends Component {
	render() {
		return (
		<div>
			<Router>
				<div>
					<Switch>
						<Route exact path='/'/>
						<Route component={NavBar}/>
					</Switch>
					<Switch>
						<Route exact path='/' component={Home}/>
						<Route path='/recipebox' component={RecipeBox}/>
						<Route path='/category/:catid/newrecipe' render={props => {
						 	const {catid} = props.match.params;
						 		return (
						 			<NewRecipeForm category_id={parseInt(catid)}/>
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
									<EditRecipeForm id={parseInt(rid)}/>
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


