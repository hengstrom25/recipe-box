//import React from 'react';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import CategoryCard from './components/CategoryCard';
import RecipeBox from './components/RecipeBox';

class App extends Component {
	render() {
		return (
			<div>
				<RecipeBox />
			</div>
		)
	}
};
		
  
    //<Router>
    //	<Switch>
    //		<Route exact path="/" component={RecipeBox} />
    //		<Route exact path="/category" component={Category} />
    //	</Switch>
    //</Router>	


export default App;
