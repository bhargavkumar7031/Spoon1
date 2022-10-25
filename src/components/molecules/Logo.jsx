import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/Logo.png'

const Wrapper = styled.div`
	display: inline-block;
`
const Image = styled.img`
	vertical-align: middle;
`
const Text = styled.h1`
	font-family: 'Alegreya Sans SC', sans-serif;
	display: inline;
	vertical-align: middle;
	padding: 5px;
`

//broken image on initial load
const addLogoSrc = (e) => {
	console.warn('Logo image reloaded')
	e.target.src = logo
}

function Logo() {
	return (
		<Wrapper>
			<Image
				src={logo}
				alt='Logo'
				width={45}
				height={45}
				onError={addLogoSrc}
			/>
			<Text>Spoon</Text>
		</Wrapper>
	)
}

export default Logo
