import React from 'react'

import {
	BrowserRouter as Router,
	Switch,
 	Route } from 'react-router-dom'

//components
import Home from '../Home'
import Login from '../Login'
import Register from '../Register'
import Layout from '../../Layout'



const RouteLink = () => {
	return (
		<Switch>
			<Route exact path = '/' component={ Home } />
			<Route path = '/auth/login' component={ Login } />
			<Route path = '/auth/register' component={ Register } />
		</Switch>

	)


}

export default RouteLink
