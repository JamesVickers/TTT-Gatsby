import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CardStyles from "../components/styles/card"
import HexFallingLeft from "../components/hexFallingLeft"
import Footer from "../components/footer"

const Privacy = props => (
  <Layout>
    <SEO title="about" />

    <h2>Privacy Policy</h2>
    <CardStyles>
      <p>
        This privacy policy will detail how Treetops Tech use personal data that
        we collect from you when you use our website.
      </p>
      <ul>
        Topics:
        <li>What data we collect</li>
        <li>How we collect data</li>
        <li>How we use data</li>
        <li>How we store data</li>
        <li>What are your data protection rights? </li>
        <li>What are cookies? </li>
        <li>Privacy policies of other websites</li>
        <li>Changes to our privacy policy</li>
        <li>How to contact us</li>
        <li>How to contact the appropriate authority</li>
      </ul>
      <h3>What data we collect</h3>
      <p>
        Upon accepting our recommended cookies, we collect Google Analytics data
        about how you interact with our site.
      </p>
      <p>
        Necessary cookies enable core functionality such as page navigation and
        access to secure areas and are collected by default. The website cannot
        function properly without these cookies, and can only be disabled by
        changing your browser preferences.
      </p>
      <p>We collect contact information on submission of our contact form.</p>
      <h3>How we collect data</h3>
      <p>We collect and process data when you:</p>
      <ul>
        <li>Use or view our website via your browser’s cookies</li>
        <li>
          Send us contact information using the form on our Contact page having
          consented for us to use this data
        </li>
      </ul>
      <h3>How we use data</h3>
      <p>We collect your data so that we can:</p>
      <ul>
        <li>Track how users interact with our site using Google Analytics</li>
        <li>Contact users if we receive an enquiry</li>
      </ul>
      <h3>How we store your data</h3>
      <p>
        Google Analytics data is stored securely by Google in our company
        account.
      </p>
      <p>
        Personal data submitted via the contact form is sent to us by email and
        deleted after use.
      </p>
      <h3>What are your data protection rights?</h3>
      <p>
        Treetops Tech would like to make sure that you are fully aware of your
        data protection rights. Every user is entitled to the following:
      </p>
      <ul>
        <li>
          <b>The right to access</b> – You have the right to request copies of
          your personal data. We may charge you a small fee for this service.
        </li>
        <li>
          <b>The right to rectification</b> – You have the right to request that
          we correct any information you believe to be inaccurate. You also have
          the right to request that we complete any information you believe to
          be incomplete.
        </li>
        <li>
          <b>The right to erasure</b> – You have the right to request that we
          erase your personal data under certain conditions.
        </li>
        <li>
          <b>The right to restrict processing</b> – You have the right to
          request that we restrict the processing of your data under certain
          conditions.
        </li>
        <li>
          <b>The right to object to processing</b> – You have the right to
          object to the processing of your data under certain conditions.
        </li>
        <li>
          <b>The right to data portability</b> – You have the right to request
          that we transfer the data we have collected to another organisation,
          or directly to you, under certain conditions.
        </li>
      </ul>
      <p>
        If you make a request, we have one month to respond to you. If you would
        like to exercise any of these rights, please contact us using the
        details found at the bottom of each main page of our website.
      </p>
      <h3>What are cookies?</h3>
      <p>
        Cookies are text files placed on your computer to collect standard
        internet log information and visitor information behaviour. When you
        visit our website we may collect information automatically through
        cookies or similar technology.
      </p>
      <h3>Privacy policies of other websites</h3>
      <p>
        This privacy policy only applies to our website. Any external websites
        that our site links to have their own privacy policies, for your
        reference.
      </p>
      <h3>Changes to our privacy policy</h3>
      <p>
        Treetops Tech keeps its privacy policy under regular review and places
        any updates on this web page. This privacy policy was last updated 31st
        August 2019.
      </p>
      <h3>How to contact us</h3>
      <p>
        If you have any questions about our privacy policy, the data we hold on
        you or you would like to exercise one of your data protection rights,
        please do not hesitate to contact us. Our contact details can be found
        at the bottom of each main page of our website.
      </p>
      <h3>How to contact the appropriate authority</h3>
      <p>
        Should you wish to report a complaint of if you feel we have not
        addressed your concern in a satisfactory manner, you may contact the
        Information Commissioner’s Office.
      </p>
    </CardStyles>

    <HexFallingLeft />

    <Footer />
  </Layout>
)

export default Privacy
