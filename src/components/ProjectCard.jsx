import React from "react"
import { Link } from "gatsby"
import { RichText } from "prismic-reactjs"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"
import colors from "styles/colors"
import PropTypes from "prop-types"

const ProjectCardContainer = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-auto-columns: 1fr;
  width: 100%;
  margin-top: 50px;
  -webkit-box-align: end;
  align-items: end;
  grid-auto-flow: row;
  gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-area: 3 / 1 / 4 / 10;

  .project-type {
    box-sizing: border-box;
    margin-bottom: 10px;
    line-height: 30px;
    margin-top: 0px;
    font-size: 20px;
    font-weight: 400;
    grid-area: span 1 / span 2 / span 1 / span 2;
    align-self: baseline;
  }
  .project-title {
    box-sizing: border-box;
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 80px;
    line-height: 100px;
    font-weight: 400;
    grid-area: span 1 / span 7 / span 1 / span 7;
    align-self: baseline;
    cursor: pointer;
    color: ${colors.red};
  }
`

const ProjectCard = ({ title, type }) => (
  <ProjectCardContainer>
    <h3 className="project-type">{type}</h3>
    <h2 className="project-title">{title}</h2>
  </ProjectCardContainer>
)

export default ProjectCard

ProjectCard.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
