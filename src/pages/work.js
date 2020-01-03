import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import WorkExampleBrewces from "../components/workExampleBrewces"
import WorkExampleBochiBochi from "../components/workExampleBochiBochi"
import WorkExampleApp from "../components/workExampleApp"
import WorkExampleFreelance from "../components/workExampleFreelance"
import Footer from "../components/footer"
import HexButtonLeft from "../images/hex-button-left.png"
import HexButtonRight from "../images/hex-button-right.png"

const HexButtonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  img {
    margin: 20px;
    &:hover {
      cursor: pointer;
      transition: transform 0.2s;
      transform: scale(1.1);
    }
  }
  h2 {
    padding: 4px;
  }
`

const Work = props => (
  <Layout>
    <SEO title="work" />
    <HexButtonDiv>
      <img
        src={HexButtonLeft}
        alt="hexagonal button linking to the previous work example page"
      />
      <h2>Business websites</h2>
      <img
        src={HexButtonRight}
        alt="hexagonal button linking to the next work example page"
      />
    </HexButtonDiv>

    <WorkExampleBrewces />
    <WorkExampleBochiBochi />
    <WorkExampleApp />
    <WorkExampleFreelance />

    <Footer />
  </Layout>
)

export default Work
