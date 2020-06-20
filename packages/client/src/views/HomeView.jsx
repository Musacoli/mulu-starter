import { Header } from 'components/Header';
import { LayoutContainer } from 'containers/Layout/styled';
import React from 'react'

import { Home } from 'containers/Home';

const HomeView = () => {
  return (
    <LayoutContainer fluid>
      <Header />
      <Home />
    </LayoutContainer>
  )
}

export default HomeView;
