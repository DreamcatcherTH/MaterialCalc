import React, { Component } from 'react';
import Page from '../Pages/StartPage';
import SecondPage from '../Pages/SecondPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
	render() {
		return (
			<Router>
				{/* <div> */}
					<nav>

						<Route name="Page" path='/' component={Page} />
						<Route name="SecondPage" path='/SecondPage' component={SecondPage} />
					</nav>
				{/* </div> */}
			</Router>
		);
	}
}

export default App;