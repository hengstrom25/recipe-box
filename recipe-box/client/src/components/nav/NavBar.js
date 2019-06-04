import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';


const NavBar = () => {
	return (
		<div className='navbar'>
			<Link to='/recipebox'>Recipe Box</Link>
				<ul>
					<li><Link to='/category/1'>Breakfast</Link></li>
					<li><Link to='/category/2'>Salad</Link></li>
					<li><Link to='/category/3'>Soup</Link></li>
					<li><Link to='/category/4'>Side Dishes</Link></li>
					<li><Link to='/category/5'>Meat Dishes</Link></li>
					<li><Link to='/category/6'>Vegetarian</Link></li>
					<li><Link to='/category/7'>Pasta</Link></li>
					<li><Link to='/category/8'>Dessert</Link></li>
					<li><Link to='/category/9'>Other</Link></li>
				</ul>
			</div>
		)
	};
	
export default NavBar;				
