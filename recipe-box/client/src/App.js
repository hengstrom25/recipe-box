//import React from 'react';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CategoryCard from './components/CategoryCard';
import RecipeBox from './components/RecipeBox';
import RecipeCard from './components/RecipeCard';

const data = {categories: [
  {name: "Salads",
   recipes: [
      {name: "Mom's Tossed Salad",
       url: "http://greatcooks.com/blah/123",
       comments: "This is a good salad"
      },
     {name: "Dad's Potato Salad",
      url: "http://goodstuff.com/abc/456",
      comments: "Many calories"
     }
   ]
  },
  {name: "Desserts",
    recipes: [
      {name: "Chocolate Cake",
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
				<RecipeBox categories={data.categories}/>
				<CategoryCard recipes={data.categories[0].recipes}/>
				<RecipeCard recipe={data.categories[0].recipes[0]}/>
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
