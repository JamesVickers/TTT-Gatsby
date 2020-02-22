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
  bs: "0px 0px 10px 5px rgba(23, 23, 23, 0.2)",
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
  h2 {
    margin-top: 40px
    margin-bottom: 0;
    font-family: title-font;
  }
  p {
  width: 95%;
  max-width: 550px;
  margin: 20px auto 0 auto;
  }
  ul {
    padding: 0;
    
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
    const page = this.props.location.pathname
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Page>
          <Header />
          <Main path={page}>{this.props.children}</Main>
        </Page>
      </ThemeProvider>
    )
  }
}

export default Layout
