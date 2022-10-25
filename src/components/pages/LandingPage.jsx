import React from 'react'
import LandingTemplate from '../templates/LandingTemplate'
import Illustration from '../../assets/illustration.png'

function LandingPage() {
	return (
		<LandingTemplate
			illustration={Illustration}
			heading='Feed the Need'
			title='Donate unused food to those in need.'
		></LandingTemplate>
	)
}

export default LandingPage
