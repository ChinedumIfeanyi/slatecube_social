import React, { Component } from 'react'
import pen from "./images/Pen.jpg"

import RouteLink from './component/RouteLink'
import Header from './component/Header'

class Layout extends Component {


	render() {
		return (
			<div>

				<Header />
				<p>SlateCube Social</p> 

				<RouteLink />
				
			</div>
		);
	}
}

export default Layout
