import { lazy } from 'react'
import { __ } from '@wordpress/i18n'
import { registerApp } from 'assistant'
import PodsIcon from './icon'

const PodsApp = lazy( () => import(
	/* webpackChunkName: "app-pods" */ './app'
) )

registerApp( 'pods', {
	label: __( 'Pods' ),
	root: PodsApp,
	icon: PodsIcon,
} )