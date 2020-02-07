import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerStyles from "../components/styles/banner"
import CardStyles from "../components/styles/card"
import HexFallingLeft from "../components/hexFallingLeft"
import Footer from "../components/footer"
import BannerImageFlowers from "../images/banner-img-flowers.png"

const ContactFormStyles = styled.form`
  h3 {
    margin: 0 auto;
  }
  ul {
    max-width: 400px;
    li {
      display: flex;
      flex-direction: column;
      margin-bottom: 25px;
      &:last-of-type {
        flex-direction: row-reverse;
      }
      &:last-of-type {
        margin-bottom: 0;
      }
      &:last-of-type label {
        margin-left: 10px;
      }
    }
    textarea,
    input {
      padding: 5px;
      border: 1.5px solid ${props => props.theme.colorMedium};
      border-radius: 5px;
    }
    textarea:focus,
    input:focus {
      outline: none;
      border: 3px solid ${props => props.theme.colorSecondary};
    }
    textarea {
      resize: none;
    }
    input[type="checkbox"] {
      width: 20px;
      height: 20px;
    }
    button {
      display: block;
      margin: 10px auto;
      padding: 15px 20px;
      border-radius: 5px;
      outline: none;
      background: ${props => props.theme.colorSecondary};
      border: none;
      color: ${props => props.theme.colorDark};
      &:focus,
      &:hover {
        background-color: ${props => props.theme.colorPrimary};
      }
    }
  }
`

const Contact = props => (
  <Layout>
    <SEO title="about" />
    <BannerStyles>
      <img
        src={BannerImageFlowers}
        alt="close up of a group of jasmine flowers"
        aria-hidden="true"
      />
      <h2 tabindex="0">contact</h2>
    </BannerStyles>

    <FontAwesomeIcon
      icon={faAngleDoubleDown}
      style={{ height: "50px", width: "50px", color: "#FFE000" }}
    />

    <p>
      Treetops Tech would love to help spread your message and grow your
      business.
    </p>

    <p>Get in touch to start your journey.</p>

    <CardStyles>
      {/* script for recaptcha */}
      <script
        src="https://www.google.com/recaptcha/api.js"
        async
        defer
      ></script>
      <ContactFormStyles
        id="contactForm"
        method="POST"
        action="https://formspree.io/mbjgzqgv"
      >
        <h3
          tabindex="0"
          aria-label="Complete the following form to contact Treetops Tech"
        >
          Enquire today
        </h3>

        <ul>
          <li>
            <label aria-hidden="true">Name</label>
            <input
              type="text"
              autocomplete="off"
              name="name"
              required
              tabindex="0"
              aria-label="Input area for your Name"
            />
          </li>
          <li>
            <label aria-hidden="true">Company Name</label>
            <input
              type="text"
              autocomplete="off"
              name="company"
              tabindex="0"
              aria-label="Input area for your Company name"
            />
          </li>
          <li>
            <label aria-hidden="true">Email</label>
            <input
              type="email"
              autocomplete="off"
              name="_replyto"
              required
              tabindex="0"
              aria-label="Input area for your Email Address"
            />
          </li>
          <li>
            <label aria-hidden="true">Telephone</label>
            <input
              type="text"
              autocomplete="off"
              name="telephone"
              tabindex="0"
              aria-label="Input area for your Telephone number"
            />
          </li>
          <li>
            <label aria-hidden="true">Enquiry Message</label>
            <textarea
              type="text"
              rows="6"
              name="message"
              tabindex="0"
              aria-label="Text area for your message or enquiry"
            ></textarea>
          </li>
          <li>
            <label for="consent" aria-hidden="true">
              I consent for Treetops to store my details for contact purposes
            </label>
            <input
              type="checkbox"
              name="consent"
              id="consent"
              value="True, I consent."
              required
              tabindex="0"
              aria-label="Checkbox giving consent for Treetops to store my details for contact purposes"
            />
          </li>
          <div
            class="g-recaptcha"
            data-sitekey="6LeQbtMUAAAAAPcOFkWQ9T2EYyai_HYfE6_YLfBP"
          ></div>
          <br />
          <button type="submit" tabindex="0">
            Submit
          </button>
        </ul>
      </ContactFormStyles>
    </CardStyles>

    <CardStyles>
      <p>If you prefer, you can contact us using one of our other channels:</p>
      <ul>
        <li>
          Email or call us using the contact details in the footer of our
          website
          <a href="#footer">here</a>
        </li>
        <li>
          Drop us a private message on our Treetops Tech Facebook page
          <a
            href="https://www.facebook.com/treetopstech"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
        </li>
      </ul>
    </CardStyles>
    <p>Thank you.</p>

    <HexFallingLeft />

    <Footer />
  </Layout>
)

export default Contact
