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
		<Router>
			<div>
				<Route exact path='/recipebox' component={RecipeBox}/>
				<RecipeBox categories={data.categories}/>
				<CategoryCard recipes={data.categories[0].recipes}/>
				<RecipeCard recipe={data.categories[0].recipes[0]}/>
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


export default App;
