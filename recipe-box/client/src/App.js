//import React from 'react';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import CategoryCard from './components/CategoryCard';
import RecipeBox from './components/RecipeBox';
import RecipeCard from './components/RecipeCard';

const data = {categories: [
  {name: "Salads", id: 0,
   recipes: [
      {name: "Mom's Tossed Salad", id: 0,
       url: "http://greatcooks.com/blah/123",
       comments: "This is a good salad"
      },
     {name: "Dad's Potato Salad", id: 1,
      url: "http://goodstuff.com/abc/456",
      comments: "Many calories"
     }
   ]
  },
  {name: "Desserts", id: 1,
    recipes: [
      {name: "Chocolate Cake", id: 0,
       url: "http://easybake.com/xyz/999",
       comments: "Love it"
      }
   ]
}
]
};

class App extends Component {
	render() {
		return (
		<div>
			<Router>
				<div>
					<Switch>
						<Route path='/recipebox' render={props => (
							<RecipeBox categories={data.categories}/>
						)}/>
						<Route path='/category/:catid' render={props => {
          					const {catid} = props.match.params;
          						return (
            						<CategoryCard recipes={data.categories[catid].recipes}/>
          						)
        					}}/>
						<Route path='/recipe/:catid/:rid' render={props => {
						 	const {catid, rid} = props.match.params;
						 		return (
						 			<RecipeCard recipe={data.categories[catid].recipes[rid]}/>
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

{/*<div className ='App'>
	<header className='App-header'>
	<h1 className='App-title'>Recipe Box</h1>
	</header>
</div>*/}
