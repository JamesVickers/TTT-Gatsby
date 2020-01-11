import React from "react"
import { Link as GatsbyLink } from "gatsby"
import styled from "styled-components"

const BackToTopButtonStyles = styled(GatsbyLink)`
  width: 120px;
  text-decoration: none;
  padding: 15px;
  border-radius: 5px;
  background: ${props => props.theme.colorSecondary};

  &:hover {
    background: ${props => props.theme.colorDark};
  }
`

const BackToTopButton = () => (
  <BackToTopButtonStyles to="#header">Back to top</BackToTopButtonStyles>
)

export default BackToTopButton
