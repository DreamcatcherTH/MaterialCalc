import React, { Component } from 'react';
import Building from '../Pages/building';
import Floors from '../Pages/floors';
import Material from '../Pages/material/material';
import wallLength from '../Pages/wallLength';
import Result from '../Pages/result';
import Error from '../Error/error';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css';

export default class App extends Component {

	render() {
		return (
			<div>
				<h1>Калькулятор цены конструкций</h1>

				<Router>
					<nav>

						<Route name="building" path='/building' component={Building} />
						<Route name="floors" path='/floors' component={Floors} />
						<Route name="material" path='/material' component={Material} />
						<Route name="wallLength" path='/wallLength' component={wallLength} />
						<Route name="result" path='/result' component={Result} />
						<Route name="error" path='/error' component={Error} />	
						<Redirect from='/' to='/building' />
					</nav>
				</Router>
			</div>
		);
	}
}