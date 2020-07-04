import React from "react"

import { graphql } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"

const Image = styled.img`
  grid-column: 3/11;
  margin-top: 50px;
`

const BackToTop = styled.h4`
  grid-column: 1/3;
  box-sizing: border-box;
  margin-bottom: 10px;
  line-height: 30px;
  margin-top: 0px;
  font-size: 20px;
  font-weight: 400;
  margin-top: 50px;
  -webkit-align-self: baseline;
  -ms-flex-item-align: baseline;
  align-self: baseline;
`
const Footer = data => (
  <>
    <BackToTop>Back To Top</BackToTop>
    <Image
      src="https://images.prismic.io/imalec/1f12de88-a8b5-4fe9-adc8-2a675341fc28_footer-img.png?auto=compress,format"
      alt="It's me!"
    />
  </>
)

export default Footer

export const query = graphql`
  {
    prismic {
      allHomepages {
        edges {
          node {
            footer_image
          }
        }
      }
    }
  }
`
