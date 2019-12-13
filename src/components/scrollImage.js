import React from "react"
import styled from "styled-components"
import scrollImage from "../images/scroll-icon-opacity40.png"

const ScrollImageStyles = styled.img`
  width: 32px;
  height: 35px;
  position: absolute;
  bottom: 20px;
  left: 50%;
  margin: 0 auto;
`
const ScrollImage = () => (
  <ScrollImageStyles
    src={scrollImage}
    alt="Icon directing the user to scroll down the page"
    aria-hidden="true"
  />
)

export default ScrollImage
