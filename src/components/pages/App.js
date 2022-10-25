import { createGlobalStyle } from 'styled-components'
import logo from '../../assets/background.svg'
import LandingPage from '../templates/LandingTemplate'

const GlobalStyles = createGlobalStyle`
	body {
		background-image: url(${logo});
		background-size: cover;
		background-repeat: no-repeat;
	}
`

function App() {
	return (
		<div className='App'>
			<GlobalStyles />
			<LandingPage></LandingPage>
		</div>
	)
}

export default App
