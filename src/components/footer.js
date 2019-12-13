import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const FooterDiv = styled.div`
  flex-shrink: 0;
  margin-top: 0px;
  footer ul {
    width: 90%;
    margin: 50px auto 0 auto;
    padding: 40px 0;
    border-top: solid 1.5px ${props => props.theme.colorMedium};
  }
  footer a {
    color: $color-dark;
    text-decoration: none;
    width: 550px;
    max-width: 550px;
  }
  footer a:hover {
    color: ${props => props.theme.colorSecondary};
  }
`

const Footer = () => (
  <FooterDiv>
    <ul className="footer-ul">
      <Link to="/contact" aria-label="Clickable link to the Contact us page">
        Contact us
      </Link>
      <Link
        to="mailto:support@treetops.tech"
        aria-label="Clickable link to email Treetops Tech"
      >
        support@treetops.tech
      </Link>
      <Link
        to="/contact"
        aria-label="Treetops Tech telephone number 01538 266395"
      >
        01538 266395
      </Link>
      <Link
        to="https://www.facebook.com/treetopstech"
        aria-label="Clickable link to the Contact us page"
      >
        FACEBOOK LINK HERE!!!!!!!!!!!!
      </Link>
      <Link
        to="/privacy"
        aria-label="Clickable link to the Privacy policy page"
      >
        Privacy Policy
      </Link>
      <li>Treetops Tech Ltd. 2019</li>
      <li>All rights reserved</li>
    </ul>
  </FooterDiv>
)

export default Footer
