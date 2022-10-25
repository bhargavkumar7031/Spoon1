import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
	background: ${(props) =>
		props.backgroundColor ? props.backgroundColor : '#FFDB58'};
	color: ${(props) => (props.color ? props.color : '#FFFFFF')};
	font-size: 1em;
	padding: 0.25em 1em;
	border: 2px solid
		${(props) => (props.backgroundColor ? props.backgroundColor : '#FFDB58')};
	border-radius: 50px;
`

function CustomizedButton({ backgroundColor, color, name, isUppercase }) {
	return (
		<Button backgroundColor={backgroundColor} color={color}>
			{isUppercase ? name.toUpperCase() : name}
		</Button>
	)
}

export default CustomizedButton
