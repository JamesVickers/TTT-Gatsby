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
  h3 {
    max-width: 80%;
    margin: 30px 0 30px 0;
  }
  a {
    color: $color-dark;
    text-decoration: none;
  }
  p {
    width: 80%;
    margin: 0 0 20px 0;
    &:last-child {
      margin-bottom: 30px;
    }
  }
`
export default CardStyles
