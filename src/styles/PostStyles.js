import rehypeReact from "rehype-react";
import styled from "styled-components";
import React from 'react';

export const Title = styled.h1`
  font-size: 3em;
`;

export const SubTitle = styled.h2`
  font-size: 2em;
`;


export const Paragraph = styled.p`
  font-size: 1em;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

// const IframeContainer = styled.div`
//   width: 100%;
//   height: 700px;
// `;

// export function Iframe({src, title}){
//   return (
//   <IframeContainer>
//     <iframe src={src} title={title} allowFullScreen style={{
//       width: '100%',
//       height: '100%',
//       position: 'absolute',
//       left: '0px'

//     }}></iframe>
//   </IframeContainer>
//   );
// }

// Allows to use styled components to style markdown
export const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    h1: Title,
    h2: SubTitle,
    p: Paragraph,
    img: Image
  }
}).Compiler;