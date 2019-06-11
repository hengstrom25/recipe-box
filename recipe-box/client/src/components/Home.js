import React from 'react';
import { BrowserRouter, Link} from 'react-router-dom';

 const Home = () => {
  return (
    <div className ='App'>
		<header className='App-header'>
			<h1 className='App-title'>Recipe Box</h1>
			<h2>
				<Link to="/recipebox">Open</Link>
			</h2>
		</header>
    </div>
  );
};

 export default Home;
