import React from 'react'
import Header from '../organisms/Header'
import styled from 'styled-components'
import Illustration from '../../assets/illustration.png'

const LandingImage = styled.img`
	width: 100%;
	height: 500px;
`

const LandingHeading = styled.h1`
	text-align: center;
	font-family: 'Alegreya Sans SC', sans-serif;
`

const LandingTitle = styled.h4`
	text-align: center;
	font-family: 'Alegreya Sans SC', sans-serif;
`

function LandingTemplate(props) {
	return (
		<>
			<Header />
			<LandingImage src={props.illustration} alt='Landing' />
			<LandingHeading>{props.heading}</LandingHeading>
			<LandingTitle>{props.title}</LandingTitle>
		</>
	)
}
// function LandingTemplate({ illustration, heading, title }) {
// 	return (
// 		<>
// 			<Header />
// 			<LandingImage src={Illustration} alt='Landing' />
// 			<LandingHeading>Feed the Need</LandingHeading>
// 			<LandingTitle>Donate unused food to those in need</LandingTitle>
// 		</>
// 	)
// }

export default LandingTemplate
