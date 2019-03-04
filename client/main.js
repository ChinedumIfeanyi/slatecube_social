import React from 'react'
import { render } from 'react-dom'

import App from './App'

const Mount = document.getElementById('root')
render(<App />, Mount)

if(module.hot) {
	module.hot.accept()
}