import styled from "styled-components"

const BannerStyles = styled.div`
  margin-bottom: 10px;
  position: relative;
  text-align: center;
  img {
    width: 70%;
  }
  h2 {
    font-family: "title-font";
    color: ${props => props.theme.colorDark};
    width: fit-content;
    margin: 20px auto 0 auto;
  }
`

export default BannerStyles
