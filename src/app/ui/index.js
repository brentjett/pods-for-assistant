import React from 'react'
import { Page } from 'assistant/ui'
import PodsIcon from '../../icon'

export const Main = () => {
	return (
		<Page
			title="Pods"
			shouldShowBackButton={ false }
			showAsRoot={ true }
			icon={ <PodsIcon /> }
		>
			Hey.
		</Page>
	)
}