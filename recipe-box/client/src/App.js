//import React from 'react';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
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
			<div className ='App'>
				<header className='App-header'>
					<h1 className='App-title'>Recipe Box</h1>
				</header>
			</div>
		<Router>
			<div>
				<Switch>
					<Route path='/recipebox' component={RecipeBox}/>
					<Route path ='/categories' component={CategoryCard}/>
					<Route path='/recipes' component={RecipeCard}/>
				</Switch>
			</div>
		</Router>
		)
	}
};
		
  
    //<Router>
    //	<Switch>
    //		<Route exact path="/" component={RecipeBox} />
    //		<Route exact path="/category" component={Category} />
    //	</Switch>
    //</Router>	
    
    //<Route path='/recipebox' component={RecipeBox} categories={data.categories[id]}/>


export default App;
