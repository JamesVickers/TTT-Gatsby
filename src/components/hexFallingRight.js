import React from "react"
import styled from "styled-components"
import HexRight from "../images/hex-falling-right.png"

const HexFallingRightStyles = styled.img`
  width: 240px;
`

const HexFallingRight = () => (
  <HexFallingRightStyles
    src={HexRight}
    alt="hexagonal pattern in background in the center of the screen"
    aria-hidden="true"
  />
)

export default HexFallingRight
