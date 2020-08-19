import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'


const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
  background-color: transparent;
`

const LogoNav = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #F8EFBA;
  font-size: 40px;
  font-weight: 600;
`

export default function Logo(props) {
  return (
    <LogoContainer>
      <LogoNav to={props.currentUser ? "/dashboard" : "/"}>house of plants</LogoNav>
    </LogoContainer>
  )
}
