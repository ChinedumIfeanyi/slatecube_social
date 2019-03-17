import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'


import UserAuth from '../../user-auth'
class Register extends Component {
	constructor(props) {
		super(props)

		this.state = {
			redirect: false,
			inputFields: {
				name: "",
				email: "",
				gender: "",
				password: ""
			}
		}

		this.submitForm = this.submitForm.bind(this)
	}

	//update state when form input changes
	onInputChange( evt ) {
		const inputFields = this.state.inputFields
		inputFields[evt.target.name] = evt.target.value

		this.setState({ inputFields })
	}


	//form submisssion
	submitForm(evt) {
		evt.preventDefault()
		UserAuth.Register(this.state.inputFields)
		.then(()=> this.setState({redirect: true}))
	}


	render() {
		if(this.state.redirect) {
			return <Redirect to="/auth/login"/>
		}
		return (
			<div>
				<form method="post" onSubmit={ this.submitForm }>
					<div>
						<label htmlFor="email"> Email </label>
						<div>
							<input 
								onChange={ this.onInputChange.bind(this) }
								type="text" 
								name="email" 
								id="email" />
						</div>
					</div>

					<div>
						<label htmlFor="name"> Name </label>
						<div>
							<input
								onChange={ this.onInputChange.bind(this) } 
								type="text"
								name="name" 
								id="name" />
						</div>
					</div>

					<div>
						<label htmlFor="password"> Password </label>
						<div>
							<input
								onChange={ this.onInputChange.bind(this) }
							  type="password" 
								name="password" 
								id="password" 
							/>
						</div>
					</div>

					<div>
						<label htmlFor="gender"> Gender </label>
						<div>
							Male
							<input type="radio" 
								name="gender" 
								id="gender"
								value="male"
								checked={ this.state.inputFields.gender == "male" }
								onChange={ this.onInputChange.bind(this) }
							/> 
							<br />
							Female
							<input type="radio" 
								name="gender" 
								id="gender"
								value="female"
								checked={ this.state.inputFields.gender == "female" } 
								onChange={ this.onInputChange.bind(this) }
							/>
						</div>
					</div>


					<div>
						<input type="submit" value="Register" />
					</div>


				</form>
			</div>
		)
	}
}


export default Register