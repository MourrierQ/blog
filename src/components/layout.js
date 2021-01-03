/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Nav from './Nav';

const LayoutStyles = styled.div`
  position: relative;
`;

const Container = styled.div`
  width: 1600px;
  margin: 0 auto;
  padding: 20px;
`;


export default function Layout({ children }) {
  return (
    <LayoutStyles>
      <GlobalStyles/>
      <Typography/>
      <Nav/>
      <Container>{children}</Container>
    </LayoutStyles>
  );
}
