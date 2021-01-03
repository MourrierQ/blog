import React from "react";
import { graphql, Link } from "gatsby";
import SEO from "../components/seo";
import styled from "styled-components";
import Img from "gatsby-image";


const Hero = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 50px;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: white;

  div {
    flex: 1;

    h1 {
      font-size: 6rem;
      /* color: #59A5D8; */
    }

    h2 {
      strong {
        font-weight: normal;
      }
      /* color: #59A5D8; */
      margin-bottom: 2em;
    }

    h3 {
      width: 90%;
      margin-bottom: 20px;
    }
  }
  img {
    border-radius: 50%;
    width: 400px;
    height: 400px;
  }
`;

const Section = styled.div`
  padding: 20px 0;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 10px;
  padding: 50px;
  margin-top: 2rem;
  background-color: white;

  .logos {
    display: flex;
    justify-content: space-around;
    align-items: denter;
    margin-bottom: 5rem;
    img {
      height: 150px;
      width: 150px;
    }
  }

  .section-container {
    display: flex;
    align-items: center;

    .section-text {
      width: 500px;
    }

    .projects {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: row;
      flex-wrap: wrap;
      flex: 1;
      a {
        display: block;
        height: 250px;
        width: 350px;
        margin-bottom: 2rem;

        img {
          display: block;
          max-height: 250px;
          max-width: 350px;
          height: auto;
          width: auto;
          border-radius: 10px;
        }
      }
    }

  }
`;

export default function IndexPage({data}){
  console.log(data);
  return (<>
    <SEO title="Home" />
    <Hero>
      <div>
        <h1>Quentin Mourrier</h1>
        <h2><strong>Freelance developer, trainer and content creator</strong></h2>
        <h3>Welcome on my personnal website where I write some programming tutorials to help fellow developers</h3>
        <h3>Now let's build some good stuff.</h3>
      </div>
      <img src="https://www.fillmurray.com/500/500" alt="Fill"/>
    </Hero>
    <Section>
      <div className="logos">
        <img src={data.react.publicURL} alt="react"/>
        <img src={data.node.publicURL} alt="node"/>
        <img src={data.graphql.publicURL} alt="graphql"/>
      </div>
      <div>
        <p>Specialized in <strong>react and node js (express)</strong> with a keen interest in the <strong>JAMSTACK as well with gatsby</strong> associated with a headless cms.</p>
        <p>I am comfortable using <strong>sql and noSql (mongo) databases</strong></p>
        <p>From complex apis to basic landing pages, I'm fit to handle your projects or integrate your team to achieve great things.</p>
      </div>
    </Section>
    <Section>
      <div className="section-container">
        <div>
          <p>
            I create video tutorials for programmers on my youtube channel.
            These videos are mostly about creating projects from scratch to deployment.
          </p>
          <p>Don't hesitate to check my channel if you want to see how I usually work!</p>
        </div>
        <a href="https://www.youtube.com/channel/UCvYC0zXpnYO10EXgbhZpBFQ" target="new" title="Quentin Mourrier's youtube channel"><img src={data.youtube.publicURL} alt="Link to the youtube channel"/></a>
      </div>
    </Section>
    <Section>
      <div className="section-container">
        <div className="section-text">
          <p>
            Take a peek at some of my latest projects right here.
          </p>
          <p>You can run lighthouse tests on them to see how google evaluates them. This tool will score them depending on their speed, accessibility, best practices and SEO!</p>
          <p>If you don't know how to use this tool, <a href="https://www.youtube.com/watch?v=RYtVf0wvPpc" target="new">here is a tutorial</a> that will help you run it in a matter of seconds!</p>
        </div>
        <div className="projects">
          <a href="https://www.fillmurray.com/"><img src="https://www.fillmurray.com/500/500" alt="fill"/></a>
          <a href="https://www.fillmurray.com/"><img src="https://www.fillmurray.com/500/500" alt="fill"/></a>
          <a href="https://www.fillmurray.com/"><img src="https://www.fillmurray.com/500/500" alt="fill"/></a>
          <a href="https://www.fillmurray.com/"><img src="https://www.fillmurray.com/500/500" alt="fill"/></a>
        </div>
      </div>
    </Section>
    {/* <Section>
      <div>
        <a><img src={} alt="p"/></a>
        <a><img src={} alt="p"/></a>
        <a><img src={} alt="p"/></a>
        <a><img src={} alt="p"/></a>
      </div>
    </Section> */}
  </>);
}

export const squareImage = graphql`
  fragment squareImage on File {
    publicURL
    childImageSharp {
      fluid(maxWidth: 200, maxHeight: 200) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const query = graphql`
  query {
    react: file(relativePath: { eq: "react.svg" }) {
      ...squareImage
    }
    twitter: file(relativePath: { eq: "twitter.svg" }) {
      ...squareImage
    }
    linkedin: file(relativePath: { eq: "linkedin-icon.svg" }) {
      ...squareImage
    }
    github: file(relativePath: { eq: "github-icon.svg" }) {
      ...squareImage
    }
    youtube: file(relativePath: { eq: "youtube.svg" }) {
      ...squareImage
    }
    gmail: file(relativePath: { eq: "google-gmail.svg" }) {
      ...squareImage
    }
    node: file(relativePath: { eq: "nodejs-icon.svg" }) {
      ...squareImage
    }
    graphql: file(relativePath: { eq: "graphql.svg" }) {
      ...squareImage
    }
  }
`;
