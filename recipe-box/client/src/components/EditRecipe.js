import React from 'react';
import EditRecipeForm from './EditRecipeForm'
/*import { initialize } from 'redux-form'*/
import { connect } from 'react-redux'
import store from '../store.js';
import { fetchRecipe } from '../actions/recipes';
import { setRecipeName, setRecipeField, setRecipeNotes } from '../actions/recipe'
import { fetchCategories } from '../actions/categories';
import { withRouter } from "react-router";

const mapStateToProps = (state, ownProps) =>
    {const recipe=state.recipes.byId[parseInt(ownProps.id)] || 
    	{name: "", recipe_field: "", notes: "", category_id: 0, id:parseInt(ownProps.id)}
    console.log(state, ownProps)
        return {
        recipe: recipe,
        id: parseInt(ownProps.id),
        category: state.categories.byId[recipe.category_id] || {name: ""}
    }}

const mapDispatchToProps = dispatch => ({
    setRecipeName: (id, name) => dispatch(setRecipeName(id, name)),
    setRecipeField: (id, recipe_field) => dispatch(setRecipeField(id, recipe_field)),
    setRecipeNotes: (id, notes) => dispatch(setRecipeNotes(id, notes)),

    patchRecipeDb: (recipe) => {

        const data = new URLSearchParams();
        data.append("name", recipe.name);
        data.append("recipe_field", recipe.recipe_field);
        data.append("notes", recipe.notes);
  		data.append("category_id", recipe.category_id);

        return fetch("http://localhost:3001/recipes/" + recipe.id, {
            method: "PATCH",
            body: data,
        });
    }

    })

class EditRecipePresentation extends React.Component {
 constructor(props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
    }

            onSubmit() {
            	this.props.patchRecipeDb(this.props.recipe)
            	this.props.history.push("/category/" +this.props.recipe.category_id )
            }


    render() {
        return <EditRecipeForm onSubmit={this.onSubmit}
		recipe={this.props.recipe}
        setRecipeName = {this.props.setRecipeName}
        setRecipeField = {this.props.setRecipeField}
        setRecipeNotes = {this.props.setRecipeNotes}
        id = {this.props.id}
        />
    }

    componentDidMount() {
         store.dispatch(fetchRecipe(this.props.id))
         store.dispatch(fetchCategories())
    }
}

const EditRecipe = connect(mapStateToProps, mapDispatchToProps)(EditRecipePresentation);

export default withRouter(EditRecipe)