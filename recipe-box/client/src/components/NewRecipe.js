import React from 'react';
import NewRecipeForm from './NewRecipeForm'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

class NewRecipe extends React.Component {
 constructor(props) {
        super(props)
        this.addRecipeDb = this.addRecipeDb.bind(this)
    }
    
	addRecipeDb(values) {
		console.log(values)
		
		const data = new URLSearchParams();
		data.append("name", values.name);
		data.append("recipe_field", values.recipe_field);
		data.append("notes", values.notes);
        data.append("category_id", this.props.category_id);
		
		return fetch("http://localhost:3001/recipes", {
			method: "POST",
			body: data,
		}).then(response => response.json())
			.then(json => {
			console.log(json)
			this.props.history.push("/recipe/" + json.id)
		});
	}	
		
	render() {
		return <NewRecipeForm addRecipeDb={this.addRecipeDb}/>
	}
}

export default withRouter(NewRecipe)