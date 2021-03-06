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
  max-width: 740px;
  margin: 0 auto 20px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    background: ${props => props.theme.colorLight};
    border: none;
    padding: 0;
    margin: 15px 15px 10px 15px;
    height: 74px;
    width: 64px;
    &:focus {
      outline: none;
    }
  }
  img {
    &:hover {
      cursor: pointer;
      transition: transform 0.2s;
      transform: scale(1.1);
    }
  }
`

const examplesArray = [
  { title: "Business sites", component: <WorkExampleBrewces /> },
  {
    title: "Blog Sites",
    component: <WorkExampleBochiBochi />,
  },
  {
    title: "Web Apps",
    component: <WorkExampleApp />,
  },
  {
    title: "Freelance Development",
    component: <WorkExampleFreelance />,
  },
]

function Work(props) {
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
    <Layout location={props.location}>
      <SEO title="work" />
      <h2>Work</h2>
      <HexButtonDiv>
        <button onClick={() => decrementIndex()}>
          <img
            src={HexButtonLeft}
            alt="hexagonal button linking to the previous work example page"
          />
        </button>
        <h3>{examplesArray[workImgNumber].title}</h3>
        <button onClick={() => incrementIndex()}>
          <img
            src={HexButtonRight}
            alt="hexagonal button linking to the next work example page"
          />
        </button>
      </HexButtonDiv>
      {examplesArray[workImgNumber].component}

      <Footer path={props.location.pathname} />
    </Layout>
  )
}

export default Work
