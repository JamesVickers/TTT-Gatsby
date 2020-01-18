import React, { useState } from "react"
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

function Work() {
  const [workImgNumber, setWork] = useState(0)

  //loop through index 0-3 of examplesArray- don't allow anything outside this index range
  function decrementIndex() {
    if (workImgNumber > 0) {
      setWork(workImgNumber - 1)
    } else {
      setWork(3)
    }
  }
  function incrementIndex() {
    if (workImgNumber === 3) {
      setWork(0)
    } else {
      setWork(workImgNumber + 1)
    }
  }

  return (
    <Layout>
      <SEO title="work" />
      <HexButtonDiv>
        <button onClick={() => decrementIndex()}>
          <img
            src={HexButtonLeft}
            alt="hexagonal button linking to the previous work example page"
          />
        </button>
        <h2>Business websites</h2>
        <button onClick={() => incrementIndex()}>
          <img
            src={HexButtonRight}
            alt="hexagonal button linking to the next work example page"
          />
        </button>
      </HexButtonDiv>
      {examplesArray[workImgNumber]}

      <Footer />
    </Layout>
  )
}

export default Work
