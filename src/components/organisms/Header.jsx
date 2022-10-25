import React from 'react'
import styled from 'styled-components'
import CustomizedButton from '../atoms/Button'
import Logo from '../molecules/Logo'

const NavbarItems = styled.div`
	display: inline;
	float: right;
`

function Header() {
	return (
		<>
			<Logo />
			<NavbarItems>
				<CustomizedButton name='donate' isUppercase={true} />
			</NavbarItems>
		</>
	)
}

export default Header
