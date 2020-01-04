import React from "react"
import { Link } from "gatsby"
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

const examplesArray = [
  <WorkExampleBrewces />,
  <WorkExampleBochiBochi />,
  <WorkExampleApp />,
  <WorkExampleFreelance />,
]

function talk() {
  console.log("speaking")
}

class Work extends Layout {
  constructor(props) {
    super(props)
    this.state = {
      examplesArrayIndex: 0,
    }
  }

  incrementExamplesIndex = () => {
    //this.setState doesnt increment, only goes up to 1
    //this.state.examplesArrayIndex++ increments but not shown on page because no re-render of Work component
    this.state.examplesArrayIndex++
    console.log(this.state.examplesArrayIndex)
  }

  render() {
    return (
      <Layout>
        <SEO title="work" />
        <HexButtonDiv>
          <button onClick={() => this.incrementExamplesIndex()}>
            <img
              src={HexButtonLeft}
              alt="hexagonal button linking to the previous work example page"
            />
          </button>
          <h2>Business websites</h2>
          <img
            src={HexButtonRight}
            alt="hexagonal button linking to the next work example page"
          />
        </HexButtonDiv>

        {examplesArray[this.state.examplesArrayIndex]}

        <Footer />
      </Layout>
    )
  }
}
export default Work
