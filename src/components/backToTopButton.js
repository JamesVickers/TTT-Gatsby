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

const BackToTopButton = props => (
  <a href={`${props.path}#header`}>Back to top</a>
)

export default BackToTopButton
