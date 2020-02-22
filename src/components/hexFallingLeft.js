import React from "react"
import styled from "styled-components"
import HexLeft from "../images/hex-falling-left.png"

const HexFallingLeftStyles = styled.img`
  width: 240px;
  margin-top: 40px;
`
const HexFallingLeft = () => (
  <HexFallingLeftStyles
    src={HexLeft}
    alt="hexagonal pattern in background in the center of the screen"
    aria-hidden="true"
  />
)

export default HexFallingLeft
