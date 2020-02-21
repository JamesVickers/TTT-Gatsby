import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ArticleCardStyles from "../../components/styles/articleCard"
import ArticleLinkStyles from "../../components/styles/articleLink"
import HexFallingLeft from "../../components/hexFallingLeft"
import Footer from "../../components/footer"

const Article_2 = props => (
  <Layout location={props.location}>
    <SEO title="about" />

    <ArticleCardStyles>
      <h3>How to improve your programming skills</h3>
      <p>
        The world is run by computers, this fact is hard to ignore. Cars,
        factories, communication devices all rely on software and so much data
        is passed across the internet each day it is difficult to comprehend
      </p>
      <p>
        <ArticleLinkStyles
          href="https://www.domo.com/learn/data-never-sleeps-7"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.domo.com/learn/data-never-sleeps-7
        </ArticleLinkStyles>
      </p>
      <p>
        The workings behind the scenes, however, relies on humans writing lines
        of codes (until we reach the day that computers can rewrite their own
        software and reprogram themselves…).
      </p>
      <p>
        If you have thought about coding as a hobby or career or always wanted
        to start, ask yourself:
      </p>
      <h4>Why do I want to improve my tech skills?</h4>
      <ul>
        <li>I want to change career</li>
        <li>I want to be able to use technology ‘x’</li>
        <li>I don't want to get left behind</li>
        <li>I just find it interesting</li>
      </ul>
      <p>
        Once you pinpoint your motive, what really drives you, it's easy to get
        your head down and learn. In fact, the process will be much more
        enjoyable because every hour, every keypress will be taking you one step
        closer to your goal.
      </p>
      <h4>Choose a platform that suits your learning style</h4>
      <p>
        I'll start this section by saying that I have no affiliation with any of
        the following organisations. I have however, experience with using some
        of the online services and I am aware of their various pros and cons.
      </p>
      <p>
        There has never been a better time to learn to code, as the web is full
        of inexpensive educational resources; Treehouse, Udemy, Lynda and
        Pluralsight are just a few examples. For around £20 per month you will
        get access to 1000s of hours of tutorials, usually presented in a video
        format, with a separate built-in terminal that you can code along with
        in your browser.
      </p>
      <p>
        Most offer a free trial period so that you can test out the platform
        too.
      </p>
      <p>
        If you don’t fancy reaching for you credit-card just yet, Codecademy can
        teach you the basics and YouTube is full of full-length tutorials on
        almost every subject you can search for; including React, NodeJS and
        Angular (you can see where my language bias lies, sorry!).
      </p>
      <p>
        Similarly, a quick Google search with return great alternatives away
        from YouTube.
      </p>
      <p>
        You’ll be able to practice your code on browser based platforms like
        codewars.com and get constructive feedback, or download complete
        projects to work on locally from guys offering freebies like Wes Boss’
        free “JavaScript 30” course (javascript30.com).
      </p>
      <p>
        …Unless of course you’re unusual and enjoy reading dry, dense textbooks,
        which, with the speed that technology moves, are likely out of date as
        soon as they are published.
      </p>
      <h4>Work steadily and consistently</h4>
      <p>
        Learning any new skill takes time and 30 minutes every day of the week
        is far better than 8 hours on a Saturday. 30 minutes is long enough that
        you will get some productive work done, but short enough so as not to
        get distracted. You will find these short bursts of learning enjoyable
        and you will often find that you want to continue for longer after your
        time is up. Regular study, as part of your daily routine is also habit
        forming and will feel less and less like a chore the longer you keep it
        up.
      </p>
      <p>
        Working daily in this way means that your learning will have a
        compounding effect, as your brain will continue to process the new
        information while you sleep and daydream. You won’t realise this is
        happening (don’t worry, you won’t be dreaming in zeros and ones!), but
        you will certainly progress faster than you expect.
      </p>
      <p>
        You also won’t dread your time spent learning because, let’s face it: 8
        hours is like a full day’s work, but anyone can manage a quick 30
        minutes before dinner.
      </p>
      <h4>Practice, practice, practice</h4>
      <p>
        Once you know the basics you can put together a simple project yourself.
        The online learning platforms listed above will give you lots of ideas
        and here are a few extra things you could try to make:
      </p>
      <ul>
        <li>A website for yourself or a friend</li>
        <li>
          A to-do list application that allows you to save and remove list items
        </li>
        <li>
          An short animation that could be used as part of a larger project
        </li>
        <li>
          A forum to connect like-minded people and allow them to discuss
          certain topics
        </li>
      </ul>
      <p>
        The most effective way for new skills to stick is to repeatedly come
        across problems that you subsequently fix. And this will definitely
        happen working on your own project! Start low-risk, perhaps don’t offer
        to create a giant application for a large company, but instead work on a
        pressure-free hobby project. Any creative endeavour where you learn
        something new is worth the time and effort.
      </p>
      <h4>
        <s>Make milkshakes</s> Make mistakes
      </h4>
      <p>
        Don’t be afraid of making some mistakes along the way. Mistakes don’t
        hold you back, never trying in the first place holds you back. Code can
        be rewritten, bugs fixed and ideas scrapped altogether if they turn out
        to be not quite right. The important thing is that you learn what went
        wrong and avoid the same mistake in the future, or at least know how to
        fix it more efficiently next time.
      </p>
      <h4>Finish a project</h4>
      <p>
        I heard this piece of advice early on in my development career - finish
        the projects you start. Although giving up on a project that is clearly
        going to waste time or fail is common sense, aim to see something
        through to the end. Only by completely finishing a project do you come
        across roadblocks you will need to overcome in the future. For example,
        you made an app work locally on your home laptop, great! But how do you
        get it onto the App Store? How do you make sure it is secure? Have you
        checked it works across different devices? These finishing touches can
        eat up time and if you are working on a paid project, it is extremely
        valuable to have figured them out beforehand.
      </p>
      <h4>Have fun!</h4>
      <p>
        Surely you have started learning this because you thought you would
        enjoy it. If you find you’re really not, narrow down why that is. Have
        you jumped in a bit too deep? If so, take a few steps back. There’s no
        shame in re-learning something that is vital for your progression. Or
        consider swapping the language you are learning, there are many out
        there!
      </p>
      <p>Happy coding!</p>

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

export default Article_2
