import React from "react"
import styled from "styled-components"
import CardStyles from "./styles/card"
import AppImage from "../images/reg-app-tablet.png"

const DesktopExampleImage = styled.img`
  width: 90%;
  max-width: 400px;
`

const WorkExampleApp = () => (
  <div>
    <DesktopExampleImage
      src={AppImage}
      alt="Example pages from an Application for fire registration, displayed on tablet and mobile devices."
      aria-label="Example pages from an Application for fire registration, displayed on tablet and mobile devices."
    />

    <p>
      We love creating both Web and Mobile Apps that solve real world problems,
      and seeing them released into the wild!
    </p>

    <CardStyles>
      <h3>&quot;Works great, much better than our previous solution!&quot;</h3>
    </CardStyles>
  </div>
)

export default WorkExampleApp
