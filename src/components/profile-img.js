import React from "react"
import styled from "styled-components"
import profileImageJames from "../images/James-profile.svg"

const CardProfileImageStyled = styled.img`
  width: 159px;
  height: 181px;
  margin-bottom: 30px;
`
const ProfileImage = () => (
  <CardProfileImageStyled
    src={profileImageJames}
    alt="profile image of James Vickers, Developer"
    aria-hidden="true"
  />
)

export default ProfileImage
