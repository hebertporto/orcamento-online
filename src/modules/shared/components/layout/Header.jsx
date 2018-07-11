import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../../Router'
import ContainerCentered from '../grid/ContainerCentered'

import './styles/Header.css'

const HeaderContainer = () => {
  return (
    <ContainerCentered className="App-header">
      <header>
        <h1 className="App-title">Welcome to React</h1>
        <Link to={ROUTES.HOME}> Home</Link>
      </header>
    </ContainerCentered>
  )
}

export const Header = HeaderContainer
