import styled from "styled-components"

const BannerStyles = styled.div`
  margin-bottom: 40px;
  position: relative;
  text-align: center;
  img {
    width: 100%;
  }
  h2 {
    font-family: "title-font";
    color: ${props => props.theme.colorDark};
    width: fit-content;
    margin: 0;
    position: absolute;
    top: 85%;
    left: 10%;
    transform: translate(-50%, -50%);
  }
`

export default BannerStyles
