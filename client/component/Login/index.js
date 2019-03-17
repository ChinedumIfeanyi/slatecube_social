import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import UserAuth from '../../user-auth'

class Login extends Component {
	constructor(props) {
		super(props)

		this.state = {
			redirect: false,
			inputFields: {
				nameoremail: "",
				password: ""
			},
			fieldErrors: {

			}
		}
	}

	//update state when form input changes
	onInputChange( evt ) {
		const inputFields = this.state.inputFields
		inputFields[evt.target.name] = evt.target.value

		this.setState({ inputFields })
	}

	//attempt to login the user
	submitForm(evt) {
		evt.preventDefault()
		UserAuth.Login(this.state.inputFields)
		.then(()=> this.setState({redirect: true}))
	}


	render() {
		if(this.state.redirect ) {
			return <Redirect to='/' />
		}
		return (
			<div>
				<form method="post" onSubmit={this.submitForm.bind(this)}>
					<div>
						<label htmlFor="nameoremail"> UserName or Email </label>
						<div>
							<input
								onChange={ this.onInputChange.bind(this) }
								value={ this.state.inputFields.nameoremail } 
								type="text"
								name="nameoremail" 
								id="user" />
						</div>
					</div>

					<div>
						<label htmlFor="password"> Password </label>
						<div>
							<input
								onChange={ this.onInputChange.bind(this) }
								value={ this.state.inputFields.password }
							  type="password" 
								name="password" 
								id="password" />
						</div>
					</div>

					<div>
						<input type="submit" value="Login" />
					</div>


				</form>
			</div>
		)
	}
}


export default Login