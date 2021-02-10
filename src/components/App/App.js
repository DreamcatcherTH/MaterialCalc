import React, { Component } from 'react';
/* import {Floors, Material, Building, WallLength} from '../Pages/'; */
import Building from '../Pages/building';
import Floors from '../Pages/floors';
import Material from '../Pages/material';
import wallLength from '../Pages/wallLength';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css';

/* const App = () => {

} */
export default class App extends Component {

	render() {
		return (
			<Router>
				<nav>

					<Route name="building" path='/building' component={Building} />
					<Route name="floors" path='/floors' component={Floors} />
					<Route name="material" path='/material' component={Material} />
					<Route name="wallLength" path='/wallLength' component={wallLength} />
					<Redirect from='/' to='/building' />
				</nav>
			</Router>
		);
	}
}