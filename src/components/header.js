import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import logo from "../images/TTT_header_logo.svg"

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
  padding: 20px 20%;
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
  flex-wrap: wrap;
  flex-grow: 1;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  max-width: 350px;
  list-style-type: none;
  padding: 0;
  a {
    width: 50px;
    margin: 0 10px;
    text-decoration: none;
    color: ${props => props.theme.colorDark};
  }
  a:hover {
    cursor: pointer;
    border-top: 1px solid ${props => props.theme.colorDark};
    border-bottom: 1px solid ${props => props.theme.colorDark};
  }
`
const HeaderLogo = styled.img`
  height: 76px;
  width: 71px;
  margin: 10px 20px 0 20px;
  align-self: center;
  &:hover {
    cursor: pointer;
  }
`

const Header = () => (
  <StyledHeader id="header">
    <ScreenReaderDiv href="#main-content" tabIndex="0">
      Skip to Main Content
    </ScreenReaderDiv>
    <ScreenReaderDiv href="#footer" tabIndex="0">
      Skip to Footer
    </ScreenReaderDiv>
    <DesktopNav>
      <Link to="/about" aria-label="Clickable link to the About page">
        About
      </Link>
      <Link to="/work" aria-label="Clickable link to the Work page">
        Work
      </Link>
      <Link to="/pricing" aria-label="Clickable link to the Pricing page">
        Pricing
      </Link>
    </DesktopNav>
    <Link to="/" aria-label="Clickable link to the Home page">
      <HeaderLogo
        src={logo}
        alt="Treetops Tech logo; seven small hexagons arranged in a circle."
        aria-label="Treetops tech logo. Navigation link to homepage."
      />
    </Link>
    <DesktopNav>
      <Link to="/news" aria-label="Clickable link to the News page">
        News
      </Link>
      <Link to="/articles" aria-label="Clickable link to the Articles page">
        Articles
      </Link>
      <Link to="/contact" aria-label="Clickable link to the Contact page">
        Contact
      </Link>
    </DesktopNav>
  </StyledHeader>
)

export default Header
