import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
	return (
		<div>
			<Link to='/recipebox'>Recipe Box</Link>
				<ul>
					<Link to='/category/1'>Breakfast</Link>
					<Link to='/category/2'>Salad</Link>
					<Link to='/category/3'>Soup</Link>
					<Link to='/category/4'>Side Dishes</Link>
					<Link to='/category/5'>Meat Dishes</Link>
					<Link to='/category/6'>Vegetarian</Link>
					<Link to='/category/7'>Pasta</Link>
					<Link to='/category/8'>Dessert</Link>
					<Link to='/category/9'>Other</Link>
				</ul>
			</div>
		)
	};
	
export default NavBar;				
