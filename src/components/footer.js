import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons"
import styled from "styled-components"
import BackToTopButton from "../components/backToTopButton"

const FooterDiv = styled.div`
  flex-shrink: 0;
  margin-top: 20px;
  ul {
    width: 90%;
    margin: 50px auto 0 auto;
    padding: 40px 0;
    border-top: solid 1.5px ${props => props.theme.colorMedium};
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  a {
    color: ${props => props.theme.colorDark};
    text-decoration: none;
    width: 550px;
    max-width: 550px;
  }
  a:hover {
    color: ${props => props.theme.colorSecondary};
  }
`

const Footer = props => (
  <FooterDiv id="footer">
    <BackToTopButton path={props.path} />
    <ul className="footer-ul">
      <li>
        <Link to="/contact" aria-label="Clickable link to the Contact us page">
          Contact us
        </Link>
      </li>
      <li>
        <Link
          to="mailto:support@treetops.tech"
          aria-label="Clickable link to email Treetops Tech"
        >
          support@treetops.tech
        </Link>
      </li>
      <li>
        <Link
          to="/contact"
          aria-label="Treetops Tech telephone number 01538 266395"
        >
          01538 266395
        </Link>
      </li>
      <li>
        <a
          href="https://www.facebook.com/treetopstech"
          aria-label="Clickable link to the Contact us page"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faFacebookSquare}
            style={{ height: "30px", width: "30px" }}
          />
        </a>
      </li>
      <li>
        <Link
          to="/privacy"
          aria-label="Clickable link to the Privacy policy page"
        >
          Privacy Policy
        </Link>
      </li>
      <li>Treetops Tech Ltd. 2019</li>
      <li>All rights reserved</li>
    </ul>
  </FooterDiv>
)

export default Footer
