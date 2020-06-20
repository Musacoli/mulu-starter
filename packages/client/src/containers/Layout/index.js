import React from 'react'
import PropTypes from 'prop-types'

import { Header } from 'components/Header'
import { Content, LayoutContainer } from './styled'

export const Layout = (props) => {
  const { children } = props
  return (
    <LayoutContainer fluid>
      <Header />
      <Content>{children}</Content>
    </LayoutContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}
