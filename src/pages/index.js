import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import homeImageBG from "../images/forest_fog.png"

const IndexTitle = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-family: "title-font";
    font-size: 4rem;
    color: ${props => props.theme.colorDark};
    text-shadow: 2px 2px 0px ${props => props.theme.colorPrimary};
    text-align: center;
    margin: 0;
    margin-bottom: 10px;
  }
  h2 {
    font-family: "Abel", sans-serif;
    color: ${props => props.theme.colorLight};
    text-align: center;
    margin-top: 0;
  }
`
const HomepageBackgroundImage = styled.img`
  z-index: -100;
  position: fixed;
  object-fit: cover;
  width: 100%;
  height: 100%;
  bottom: 20px;
  left: 20px;
`

const Home = () => (
  <Layout>
    <SEO title="home" />

    <HomepageBackgroundImage
      src={homeImageBG}
      alt="forest viewed from above covered with fog."
    />

    <IndexTitle>
      <h1>Treetops Tech</h1>
      <h2>We build websites to help you grow</h2>
    </IndexTitle>
  </Layout>
)

export default Home
