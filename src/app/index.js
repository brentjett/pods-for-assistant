import React from 'react'
import { App } from 'assistant/ui'
import { Main } from './ui'

// Setup config like this
export default props => (
	<App.Config
		pages={ {
			default: Main
		} }
		{ ...props }
	/>
)