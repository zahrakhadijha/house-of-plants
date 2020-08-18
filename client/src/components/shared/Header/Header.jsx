import React from 'react'
import { Link, useHistory, NavLink } from 'react-router-dom'
import { removeToken } from '../../../services/auth'
import Logo from '../Logo/Logo'
import styled from 'styled-components'

const NavBar = styled.nav`
	background-color: #006266;
	width: 100%;
	height: 90px;
	text-decoration: none;
	font-family: 'Quicksand', sans-serif;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0px 100px;
`

const LinksContainer = styled.div`
	display: flex;
	align-items: center;
	margin-left: auto;
	a {
		align-items: center;
		text-decoration: none;
		color: #ffffff;
		font-size: 15px;
		height: 20px;
		margin: 10px;
		text-align: center;
		&:hover,
		&.active {
			text-shadow: 0 0 0.75px #ffd9da, 0 0 0.75px #ffd9da;
		}
	}
`

const LoggedInContainer = styled.div`
	display: flex;
	align-items: center;
  justify-content: space-between;
  font-family: 'Quicksand', sans-serif;
  padding: 0px 20px;
`

const StyledButton = styled.button`
	border-radius: 20px;
	height: 40px;
  width: 70px;
  border: 2px solid #0a3d62;
  outline: none;
  margin-left: 20px;
  font-family: 'Quicksand', sans-serif;
  background-color: #0a3d62;
  color: white;
  font-size: 15px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  cursor: pointer;
  &:hover {
    background-color: #3c6382;
  }
`

const StyledGreeting = styled.p`
	color: #ffffff;
	font-size: 20px;
`

export default function Header(props) {
	const history = useHistory()

	const handleLogout = () => {
		props.setCurrentUser(null)
		localStorage.removeItem('authToken')
		removeToken()
		history.push('/')
	}

	return (
		<NavBar>
			<Logo currentUser={props.currentUser} />

			{props.currentUser ? (
				<LoggedInContainer>
					<StyledGreeting>hey, {props.currentUser.username}!</StyledGreeting>
					<StyledButton onClick={handleLogout}>logout</StyledButton>
				</LoggedInContainer>
			) : (
				<>
					<LinksContainer>
						<Link to='/about'>about</Link>
						<Link to='/discover'>discover</Link>
						<Link to='/signin'>sign in</Link>
						<Link to='/signup'>create an account</Link>
					</LinksContainer>
				</>
			)}
		</NavBar>
	)
}
