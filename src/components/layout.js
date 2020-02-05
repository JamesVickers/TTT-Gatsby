import React, { Component } from "react"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import vatticanFont from "../fonts/Vattican.ttf"
import Header from "./header"

const theme = {
  colorPrimary: "#ffe000",
  colorSecondary: "#8cd4ff",
  colorSecondaryHover: "#71add1",
  colorBlack: "#171717",
  colorDark: "#383838",
  colorMedium: "#cfcfcf",
  colorLight: "#efefef",
  colorWhite: "#ffffff",
  maxWidth: "1000px",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)",
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: title-font;
    src: url(${vatticanFont});
    font-weight: normal;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 14px; /* fallback */
    font-size: min(max(14px, 4vw), 18px);
    overflow-y: scroll;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: "Overpass", sans-serif;
    margin: 0;
    line-height: 1.5;

    background: ${props => props.theme.colorLight};
    color: ${props => props.theme.colorDark};
  }
  html, body, #___gatsby, #gatsby-focus-wrapper {
    height: 100%;
  }
  p {
  width: 95%;
  max-width: 550px;
  margin: 30px auto 0 auto;
  }
  button {
    font-family: "Overpass", sans-serif;
    font-size: 14px; /* fallback */
    font-size: min(max(14px, 4vw), 18px);
  }
`
const Main = styled.div`
  text-align: center;
`

const Page = styled.div`
  min-height: 100vh;
  border: 20px solid ${props => props.theme.colorWhite};
`

class Layout extends Component {
  state = {}
  render() {
    console.log(`Location Component path:`, this.props.location.pathname)
    console.log("props:", this.props)
    console.log("children:", this.props.children)
    {
      /*need to pass this pathname to footer component*/
    }
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Page path={this.props.location.pathname}>
          <Header />
          <Main path={this.props.location.pathname}>{this.props.children}</Main>
        </Page>
      </ThemeProvider>
    )
  }
}

export default Layout
