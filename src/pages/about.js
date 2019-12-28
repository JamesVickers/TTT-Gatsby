import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"
import HexFallingLeft from "../components/hexFallingLeft"
import HexFallingRight from "../components/hexFallingRight"
import BannerStyles from "../components/styles/banner"
import CardStyles from "../components/styles/card"
import BannerImageFern from "../images/banner-img-fern.png"
import JamesProfileImage from "../images/James-profile.svg"
import HannahProfileImage from "../images/Hannah-profile.svg"
import DesignerProfileImage from "../images/Designer-profile.svg"

const ProfileImage = styled.img`
  width: 159px;
  height: 181px;
  margin-bottom: 30px;
`

const About = props => (
  <Layout>
    <SEO title="about" />
    <BannerStyles>
      <img
        src={BannerImageFern}
        alt="close up of fern leaves"
        aria-hidden="true"
      />
      <h2 tabindex="0">About</h2>
    </BannerStyles>
    <p>We build and host Websites.</p>
    <p>We build Applications.</p>
    <p>We offer Freelance Development work.</p>

    <HexFallingLeft />
    <HexFallingRight />
    <h2>The Team</h2>
    <CardStyles>
      <h3>James, developer</h3>
      <ProfileImage
        src={JamesProfileImage}
        alt="profile image of James Vickers, Developer"
        aria-hidden="true"
      />
      <p>Full-stack developer with server management skills.</p>
      <p>
        Holistic approach, incorporating his knowledge of User Experience and
        Accessibility.
      </p>
      <p>
        James has a passion for new technologies and creating innovative
        solutions.
      </p>
    </CardStyles>

    <CardStyles>
      <h3>Hannah, developer</h3>
      <ProfileImage
        src={HannahProfileImage}
        alt="profile image of Hannah Vickers, Developer"
        aria-hidden="true"
      />
      <p>Loves all things JavaScript, both front end and server side.</p>
      <p>Prides herself on being up to date with the latest technologies.</p>
      <p>Hannah finds elegant solutions to complex problems.</p>
    </CardStyles>

    <CardStyles>
      <h3>The design team</h3>
      <ProfileImage
        src={DesignerProfileImage}
        alt="profile image of the design team"
        aria-hidden="true"
      />
      <p>We contract the best designers in the field for our projects.</p>
      <p>
        This core team provides cutting edge design principles, to enhance user
        experience and achieve your goals.
      </p>
    </CardStyles>

    <Footer />
  </Layout>
)

export default About
