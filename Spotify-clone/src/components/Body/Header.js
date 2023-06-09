import React from 'react'
import { HeaderContainer, HeaderLeft, HeaderRight } from './styles'
import SearchIcon from '@material-ui/icons/Search'
import {Avatar} from '@material-ui/core'


const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeft>
          <SearchIcon/>
          <input type="text" placeholder="Search for the same 5 song"/>
      </HeaderLeft>
      <HeaderRight>
        <Avatar/>
        <h4>Carmen R</h4>
  
      </HeaderRight>
    </HeaderContainer>
  )
}

export default Header
