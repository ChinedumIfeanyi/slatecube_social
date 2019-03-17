import React from 'react'
import { render } from 'react-dom'

import { BrowserRouter as Router } from 'react-router-dom'

import Layout from './Layout'

const Mount = document.getElementById('root')
render(<Router><Layout /></Router>, Mount)

if(module.hot) {
	module.hot.accept()
}