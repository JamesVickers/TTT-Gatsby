import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ArticleCardStyles from "../../components/styles/articleCard"
import ArticleLinkStyles from "../../components/styles/articleLink"
import HexFallingLeft from "../../components/hexFallingLeft"
import Footer from "../../components/footer"

const Article_1 = props => (
  <Layout location={props.location}>
    <SEO title="about" />

    <ArticleCardStyles>
      <h3>There are not enough blogs in the world.</h3>

      <p>
        "To date, there are over 1.6 billion websites in the world and more than
        500 million are recognized as blogs. Their authors account for over 2
        million blog posts daily."
      </p>
      <p>
        <ArticleLinkStyles
          href="https://hostingtribunal.com/blog/how-many-blogs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://hostingtribunal.com/blog/how-many-blogs/
        </ArticleLinkStyles>
      </p>

      <p>
        The current population at the time of writing this blog post is
        7.7billion, and it is estimated that around half of these people can
        access the internet.
      </p>

      <p>
        That calculates to, conservatively, 8 readers per blog site; assuming
        that nobody reads from more than one single blog site ...but, as we all
        know, every avid blog reader visits multiple sites, reading multiple
        posts, on multiple topics.
      </p>

      <h4>Why more?</h4>

      <p>
        All that said, even now with the so called "explosion" in the blogging
        world, there isn't enough content to go around! With such large numbers,
        and such a large potential audience, saturation really isn’t something
        to be concerned about. There is room for you on the blogging scene.
      </p>

      <p>
        It goes without saying that these numbers are far from perfect, they are
        likely even a few hundred million or two out, but the point remains. If
        you let people know it exists, someone, somewhere will read what you’ve
        written and you will make an impact on the world. Talk about something
        you are passionate about, it will come across in your writing.
      </p>

      <h4>Try your hand at writing</h4>

      <p>
        Start with a few sentences. Maybe even a few paragraphs. That's a post.
        Get typing and contribute. You've got this ;)
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

export default Article_1
