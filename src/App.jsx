import LandingPage from './pages/LandingPage'
import NavBar from './components/NavBar'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'


function App() {
	return (
	//<LoginPage></LoginPage>
	//<SignUpPage></SignUpPage>
	// <Route>
	// 	<Route path="/" element={<LoginPage/>}/>
	// </Route>
		// <>
		// 	<NavBar />
		// 	<AboutUs />
		// </>
	<>
	<NavBar/>
	<LandingPage/>
	</>
	)
}

export default App
