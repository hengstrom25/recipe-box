import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Index = () => {

	return (
		<div>
			<p className="description_small">Can't remember what recipe you're looking? 
			Click <Link to="/recipes">here</Link> to see all of the recipes!</p>
		</div>
			)
}

export default Index;