import React from "react"
import styled from "styled-components"
import profileImgJay from "../images/profile-jay-grey.svg"

const CardProfileImageStyled = styled.img`
  width: 159px;
  height: 181px;
  margin-bottom: 30px;
`
const ProfileImage = () => (
  <CardProfileImageStyled
    src={profileImgJay}
    alt="profile image of James Vickers, Developer"
    aria-hidden="true"
  />
)

export default ProfileImage
