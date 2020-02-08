import React from "react"
import styled from "styled-components"
import CardStyles from "./styles/card"
import BrewcesDesktop from "../images/brewces-desktop.png"

const DesktopExampleImage = styled.img`
  width: 90%;
  max-width: 700px;
  box-shadow: ${props => props.theme.bs};
`

const WorkExampleBrewces = () => (
  <div>
    <DesktopExampleImage
      src={BrewcesDesktop}
      alt="Example image of pages from the Brewce's craft ale website, displayed on desktop."
      aria-label="Example image of pages from the Brewce's craft ale website, displayed on desktop."
    />

    <p>
      We love working with small and medium sized organisations, including start
      ups and those looking to expand into new areas.
    </p>
    <p>
      We offer eCommerce sites for online shopping, content managed brochure
      sites and tailor-made solutions for everything in between.
    </p>

    <CardStyles>
      <h3>&quot;Thanks for the site guys, we love it!&quot;</h3>
      <p>&#8211; Brewce's Craft Ales</p>
    </CardStyles>
  </div>
)

export default WorkExampleBrewces
