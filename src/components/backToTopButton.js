import React from "react"
import styled from "styled-components"

const BackToTopButtonStyles = styled.a`
  width: 120px;
  text-decoration: none;
  padding: 15px;
  border-radius: 5px;
  background: ${props => props.theme.colorSecondary};

  &:hover {
    background: ${props => props.theme.colorDark};
  }
`

const BackToTopButton = props => (
  <BackToTopButtonStyles href={`${props.path}#header`}>
    Back to top
  </BackToTopButtonStyles>
)

export default BackToTopButton
