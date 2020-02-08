import styled from "styled-components"

const ArticleCardStyles = styled.div`
  max-width: 200px;
  align-items: center;
  width: 95%;
  max-width: 550px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colorWhite};
  box-shadow: ${props => props.theme.bs};
  border-radius: 10px;
  margin: 40px auto;
  padding: 40px 0;
  h3 {
    max-width: 80%;
  }
  h4 {
    margin: 40px 0 0 0;
  }
  p {
    margin-bottom: 0;
    width: 80%;
    &:first-of-type {
      margin-top: 0;
    }
    &:last-of-type {
      margin-top: 40px;
    }
  }
  ul {
    padding: 0;
    margin: 0 30px 0 45px;
    li:first-of-type {
      margin-top: 20px;
    }
  }
  li {
    text-align: left;
    margin-top: 10px;
  }
`

export default ArticleCardStyles
