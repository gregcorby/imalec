import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"
import Logo from "components/_ui/Logo"

const HeaderContainer = styled("div")`
  grid-column: 1/3;
`

const HeaderContent = styled("div")`
  display: block;
  position: fixed;
`

const Navigation = styled.ul`
  margin: 0;
  padding: 0;
  position: relative;
  top: 180px;
`
const SectionLink = styled.a`
  display: block;
  margin: 0;
  padding: 0;
  list-style-type: none;
  font-size: 20px;
  line-height: 32px;
  color: ${colors.red};
  text-decoration: none;
`

const Header = () => (
  <HeaderContainer>
    <HeaderContent>
      <Link to="/">
        <Logo />
      </Link>
      <Navigation>
        <SectionLink href="#">About</SectionLink>
        <SectionLink href="#projects">Work</SectionLink>
        <SectionLink href="#resume">Resume</SectionLink>
        <SectionLink href="#">Contact</SectionLink>
      </Navigation>
    </HeaderContent>
  </HeaderContainer>
)

export default Header
