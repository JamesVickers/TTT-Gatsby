import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ArticleCardStyles from "../../components/styles/articleCard"
import ArticleLinkStyles from "../../components/styles/articleLink"
import HexFallingLeft from "../../components/hexFallingLeft"
import Footer from "../../components/footer"

const Article_3 = props => (
  <Layout location={props.location}>
    <SEO title="about" />

    <ArticleCardStyles>
      <h3>Reasons to start a tech blog</h3>

      <p>In no particular order:</p>

      <h4>You know stuff!</h4>

      <p>
        We all interact with technology in the modern world, whether you simply
        WhatsApp your family or post on Facebook from time to time, or you're an
        out and out techie who codes for a living.
      </p>

      <p>
        You are also successful at what you do; you have a goal in mind, you
        have figured out how to achieve it, and you can complete the task.
      </p>

      <p>
        But here is the key: I can assure you that there is someone in the world
        who does not know how to do what you can (an example being my not so
        tech savvy parents, sorry mum). They are not incapable of performing the
        task, but rather they do not currently have the knowledge required,
        often because no one has taken the time to teach them correctly, and at
        the correct level for their current ability.
      </p>

      <p>This is where you come in…</p>

      <h4> The current resources aren't suitable</h4>

      <p>
        We all learn differently. Fusty academic institutions don't suit
        everyone and, speaking from my own experience, many individuals learn
        faster in a less formal setting, when the content resonates and engages
        them.
      </p>

      <p>
        Remember, nobody else, past or present, has your exact life experience
        and view of the world. You have a unique voice, which has been formed by
        years of problem solving throughout your life.
      </p>

      <p>
        Your tone, style and vocabulary will be the perfect fit for a certain
        readership, who is already out there, waiting for your content to land
        on their screens.
      </p>

      <p>
        What really cements all of this is that you are enthusiastic about tech
        (you care enough about the subject to be reading this blog after all!)
        and I have a sneaking suspicion that you would like to give back, and
        after all, blogging isn't about the blogger, but it's about the bloggee.
      </p>

      <h4> Tech is a fast moving industry.</h4>

      <p>
        The tech world advances faster than almost all other areas of life.
        Devices quickly become outdated and software becomes irrelevant as the
        industry marches on.
      </p>

      <p>
        There are people whose knowledge has already become outdated as the tech
        industry has moved on around them. They do not know how to use the
        features on their device, they do not know how to build a website or
        they do not know how to connect on social media. But maybe you do.
      </p>

      <p>
        Pass on this knowledge in its current state. Don't worry about whether
        or not your articles are 'polished' enough because frankly, people who
        want your advice really don't care. You are offering free, helpful
        advice and provided you are friendly in your approach, you won't be
        rejected.
      </p>

      <p>
        The upside of this is that as long as you keep your finger on the pulse
        of the tech world, you will never run out of something useful to write
        about. There will always be a new trend, a new feature or function that
        you can learn. Once you have got to grips with it, pass it on and spread
        the word.
      </p>

      <h4>Summary</h4>

      <p>
        What you know right now is useful to someone out there, who is listening
        with open ears.
      </p>

      <p>
        Take action; start by jotting a few notes down and see where it leads
        you. Once you've formed your first few paragraphs or article, share it.
        You are right: it's useful and you'll be doing someone a favour!
      </p>

      <p>
        ** For more inspiration
        <ArticleLinkStyles href="/articles">
          view our other Articles here
        </ArticleLinkStyles>
      </p>
    </ArticleCardStyles>

    <HexFallingLeft />

    <Footer path={props.location.pathname} />
  </Layout>
)

export default Article_3
