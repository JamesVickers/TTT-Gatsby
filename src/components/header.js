import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import NProgress from "nprogress"
import logo from "../images/TTT_header_logo.svg"

NProgress.configure({ minimum: 0.1 })
NProgress.start()
NProgress.done()

const ScreenReaderDiv = styled.a`
  position: absolute;
  top: -999px;
  left: -999px;
  background-color: ${props => props.theme.colorDark};
  color: ${props => props.theme.colorPrimary};
  text-decoration: none;
  padding: 20px;
  &:focus {
    z-index: 999;
    top: 20px;
    left: 20px;
    outline: none;
    border: solid 5px $color-primary;
  }
`
const StyledHeader = styled.div`
  padding: 30px 20%;
  display: flex;
  justify-content: center;
  background: rgba(239, 239, 239, 0.9);
  position: sticky;
  top: 0;
  z-index: 200;
  box-shadow: 0 8px 6px -6px rgba(22, 22, 22, 0.3);
`

const DesktopNav = styled.ul`
  font-family: "Abel", sans-serif;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  align-items: center;
  justify-content: space-around;
  width: 350px;
  list-style-type: none;
  padding: 0;
  li:hover {
    cursor: pointer;
  }
`
const HeaderLogo = styled.img`
  height: 76px;
  width: 71px;
  &:hover {
    cursor: pointer;
  }
`

const Header = () => (
  <StyledHeader>
    <ScreenReaderDiv href="#main-content" tabindex="0">
      Skip to Main Content
    </ScreenReaderDiv>
    <ScreenReaderDiv href="#footer" tabindex="0">
      Skip to Footer
    </ScreenReaderDiv>
    <DesktopNav>
      <Link to="/about" aria-label="Clickable link to the About page">
        About
      </Link>
      <Link to="/work" aria-label="Clickable link to the Work page">
        Work
      </Link>
      <li aria-label="Clickable link to the Pricing page">Pricing</li>
    </DesktopNav>
    <Link to="/" aria-label="Clickable link to the Home page">
      <HeaderLogo
        src={logo}
        alt="Treetops Tech logo; seven small hexagons arranged in a circle."
        aria-label="Treetops tech logo. Navigation link to homepage."
      />
    </Link>
    <DesktopNav>
      <li aria-label="Clickable link to the News page">News</li>
      <li aria-label="Clickable link to the Blog page">Articles</li>
      <li aria-label="Clickable link to the Contact page">Contact</li>
    </DesktopNav>
  </StyledHeader>
)

export default Header
