import React, { Component } from 'react';

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

class RecipeBox extends Component {
	constructor(props) {
	super(props)
	
	this.state = {
	
	};
	
	render() {
	
		const { data } = this.props;
		
		return (
			{ data }
		)
	}

};

export default RecipeBox;

