import React from 'react';
import { graphql } from 'gatsby';
import { renderAst } from '../styles/PostStyles';
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
deckDeckGoHighlightElement();


export default function postTemplate({data}) {
  const { post } = data;
  return (
    <div>
      {renderAst(post.htmlAst)}
    </div>
  );
}

export const query = graphql`
 query($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      htmlAst
      frontmatter {
        title
      }
    }
  }
`;