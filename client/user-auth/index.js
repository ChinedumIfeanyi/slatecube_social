
class UserAuth {

	static Login(user) {
		console.log(user)
		// return fetch('/auth/login', {
		// 	method: 'POST',
		// 	headers:{
		// 		Accept: 'application/json',
		// 		'Content-Type': 'application/json'
		// 	},
		// 	body: JSON.stringify(user)
		// })
		// .then(response => response.json() )
		// .catch(error => console.log(error))
		return new Promise((resolve,reject) => {
			return resolve(user)
		})

	}

	static Register(user) {
		// return fetch('/auth/register',{
		// 	method: 'POST',
		// 	headers:{
		// 		Accept: 'application/json',
		// 		'Content-Type': 'application/json'
		// 	},
		// 	body: JSON.stringify(user)			
		// })
		// .then(response => response.json() )
		// .catch(error => console.log(error) )
		return new Promise((resolve,reject) => {
			return resolve(user)
		})
	}
}

export default UserAuth