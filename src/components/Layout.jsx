import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"
import globalStyles from "styles/global"
import typeStyles from "styles/typography"
import dimensions from "styles/dimensions"
import Footer from "components/Footer"
import Header from "components/Header"
import "styles/fonts.scss"

const LayoutContainer = styled.div`
  max-width: ${dimensions.maxwidthDesktop}px;
  padding-left: ${dimensions.paddingHorizontalDesktop}em;
  padding-right: ${dimensions.paddingHorizontalDesktop}em;
  margin: 0 auto;
  box-sizing: content-box;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding-left: ${dimensions.paddingHorizontalTablet}em;
    padding-right: ${dimensions.paddingHorizontalTablet}em;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    padding-left: ${dimensions.paddingHorizontalMobile}em;
    padding-right: ${dimensions.paddingHorizontalMobile}em;
  }

  .Layout__content {
    padding-bottom: 5em;
    grid-column: 3/13;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

    grid-column-gap: 20px;
    grid-auto-flow: column; /* default */
  }
`
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  justify-items: stretch;
  align-items: stretch;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <LayoutContainer className="div">
        <Global styles={[globalStyles, typeStyles]} />
        <div
          className="w-layout-grid grid"
          css={css`
            box-sizing: border-box;
            display: grid;
            grid-auto-columns: 1fr;
            width: 100%;
            grid-auto-flow: row;
            column-gap: 20px;
            grid-template-areas: "Header Header Content Content Content Content Content Content Content Content Content Content";
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
            grid-template-rows: auto;
          `}
        >
          <Header />
          <div
            className="content-section"
            css={css`
              box-sizing: border-box;
              display: grid;
              -webkit-box-pack: start;
              justify-content: start;
              justify-items: start;
              grid-auto-flow: row;
              grid-auto-columns: 1fr;
              column-gap: 20px;

              grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
              grid-template-rows: auto;
              place-self: auto;
              grid-area: Content / Content / Content / Content;
            `}
          >
            {children}
          </div>
          <Footer />
        </div>
      </LayoutContainer>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
