import styled from "styled-components"

const ArticleLinkStyles = styled.a`
  display: block;
  width: fit-content;
  margin: 0 auto;
  text-decoration: none;
  color: ${props => props.theme.colorDark};
  border-bottom: 1px solid ${props => props.theme.colorDark};
  &:hover {
    color: ${props => props.theme.colorSecondary};
    border-color: ${props => props.theme.colorSecondary};
  }
`

export default ArticleLinkStyles
