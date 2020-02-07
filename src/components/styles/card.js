import styled from "styled-components"

const CardStyles = styled.div`
  max-width: 200px;
  align-items: center;
  width: 95%;
  max-width: 550px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colorWhite};
  /*background-image: url("/img/hexellence.png");*/
  border-radius: 10px;
  margin: 40px auto;
  padding: 30px 0;
  h3 {
    max-width: 80%;
    margin-top: 0;
  }
  a {
    color: ${props => props.theme.colorDark};
    border-bottom: 1px solid ${props => props.theme.colorDark};
    text-decoration: none;
    &:hover {
      color: ${props => props.theme.colorSecondary};
      border-color: ${props => props.theme.colorSecondary};
    }
  }
  p {
    margin-bottom: 0;
    width: 80%;
    &:first-of-type {
      margin-top: 0;
    }
  }
  ul {
    padding: 0;
    margin: 15px;
  }
  li {
    text-align: left;
    list-style-type: none;
    margin-top: 10px;
    a {
      margin: 0 5px;
    }
  }
`
export default CardStyles
