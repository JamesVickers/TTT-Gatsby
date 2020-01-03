import React from "react"
import styled from "styled-components"
import CardStyles from "./styles/card"
import BochiBochiDesktop from "../images/bochi-bochi-desktop.png"

const DesktopExampleImage = styled.img`
  width: 90%;
  max-width: 700px;
`

const WorkExampleBochiBochi = () => (
  <div>
    <DesktopExampleImage
      src={BochiBochiDesktop}
      alt="Example image of pages from the Bochi-Bochi website, displayed on desktop."
      aria-label="Example image of pages from the Bochi-Bochi website, displayed on desktop."
    />

    <p>
      Got a new venture that you need help getting off the ground, like a blog,
      forum or online portfolio?
    </p>
    <p>We can help.</p>

    <CardStyles>
      <h3>&quot;Happily blogging away now, thanks!&quot;</h3>
      <p>&#8211; Bochi-Bochi</p>
    </CardStyles>
  </div>
)

export default WorkExampleBochiBochi
