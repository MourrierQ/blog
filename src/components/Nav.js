import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.nav`
  position: fixed;
  left: 0px;
  top: 0px;
  border-right: 1px solid var(--grey);
  width: 400px;
  height: 100vh;
  z-index: 100;
  background-color: white;
  display: flex;
  flex-direction: column;

  .about {
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-decoration: none;
    padding: 2rem;
    border-bottom: 1px solid var(--grey);
    &:hover {
      background-color: var(--grey);
    }

    img {
      border-radius: 100%;
      display: block;
      width: 100px;
      height: 100px;
    }
  }

  ul {
    flex: 1;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    padding: 0;
    font-size: 1.8rem;
    margin: 0;
  }

  li {
    border-bottom: 1px solid var(--grey);
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    a {
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px 10px;

      &:hover {
        background-color: var(--grey);
      }
    }
  }

`;

export default function Nav() {
  const {data} = useStaticQuery(
    graphql`
    query {
      data: allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
    `
  );
  const posts = data.edges;
  const Links = posts.map((post, index) => <li key={index}><Link  to={`${post.node.fields.slug}`}>{post.node.frontmatter.title}</Link></li>);
  return (
    <NavStyles>
      <Link className="about" to="/">
        <img src="https://www.fillmurray.com/200/200" alt="Fill"/>
        <h2>Quentin Mourrier</h2>
      </Link>
      <ul>
        {Links}
      </ul>
    </NavStyles>
  );
}
