import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { RichText, Link } from "prismic-reactjs"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"
import { css, keyframes } from "@emotion/core"
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"
import Layout from "components/Layout"
import ProjectCard from "components/ProjectCard"

const fadein = keyframes`
    0% {
        max-height: 0;
        opacity: 0;
    }

    80% {
        max-height: 1000px;
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`
const AccordionInner = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-auto-columns: 1fr;
  width: 100%;
  margin-top: 50px;
  -webkit-box-align: end;
  align-items: end;
  grid-auto-flow: row;
  column-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  padding-bottom: 50px;

  h3 {
    box-sizing: border-box;
    margin-bottom: 10px;
    line-height: 30px;
    margin-top: 0px;
    font-size: 20px;
    font-weight: 400;
    grid-column: 1/3;
    align-self: baseline;
  }

  p {
    box-sizing: border-box;
    font-size: 20px;
    line-height: 32px;
    grid-column: 3/7;
    align-self: baseline;
    margin: 0;
  }
  a {
    box-sizing: border-box;
    font-size: 20px;
    line-height: 32px;
    color: ${colors.red};
    text-decoration: none;
    align-self: baseline;
    grid-column: 8/10;
  }
`
const AccordionRow = styled(AccordionItem)`
  width: 100%;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: rgb(248, 197, 190);
  padding-bottom: 20px;
  & > div {
    &:focus,
    &:focus {
      outline: none;
    }
  }
`
const AccordionContainer = styled(Accordion)`
  div[aria-expanded="true"] + div {
    animation: ${fadein} 300ms ease-in-out;
  }
  div[aria-expanded="true"] {
    h2 {
      color: ${colors.darkBlue};
    }
  }
  box-sizing: border-box;
  width: 100%;
  grid-area: span 1 / span 10 / span 1 / span 10;
  padding-top: 100px;
`

const ImageContainer = styled.div`
  grid-column: 1/10;
  img {
    width: 100%;
    display: block;
    margin-top: 50px;
  }
`

const Resume = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-auto-columns: 1fr;
  width: 100%;
  -webkit-box-align: end;
  align-items: end;
  grid-auto-flow: row;
  column-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-area: span 1 / span 10 / span 1 / span 10;
  padding-top: 150px;
`

const EmployerRow = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-auto-columns: 1fr;
  margin-bottom: 50px;
  -webkit-box-align: end;
  align-items: end;
  grid-auto-flow: row;
  column-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: rgb(248, 197, 190);
  width: 100%;
  grid-area: span 1 / span 10 / span 1 / span 10;
  img {
    box-sizing: border-box;
    border-width: 0px;
    max-width: 100%;
    width: 60px;
    height: auto;
    vertical-align: middle;
    display: inline-block;
    align-self: baseline;
  }
  h2 {
    box-sizing: border-box;
    margin-top: 0px;
    margin-bottom: 40px;
    font-size: 80px;
    line-height: 100px;
    font-weight: 400;
    grid-area: 1 / 3 / 2 / 9;
    align-self: baseline;
  }
  .employer-details {
    margin-bottom: 30px;
    box-sizing: border-box;

    grid-area: 2 / 3 / 3 / 10;
    p {
      box-sizing: border-box;
      font-size: 20px;
      line-height: 32px;
      margin: 0;
    }
  }
  .employer-desc {
    box-sizing: border-box;
    font-size: 20px;
    line-height: 32px;
    grid-area: 3 / 3 / 4 / 10;
    margin-bottom: 50px;
  }
`

const IntroText = styled.div`
  box-sizing: border-box;
  margin-right: 0px;
  margin-left: 0px;
  padding-top: 67px;
  margin-top: 0px;
  margin-bottom: 80pxnm;
  grid-area: 1 / 2 / 2 / 10;
`
const IntroImg = styled.img`
  box-sizing: border-box;
  border-width: 0px;
  vertical-align: middle;
  display: inline-block;
  width: 100%;
  max-width: none;
  grid-area: 2 / 2 / 2 / 4;
`
const IntroDesc = styled.p`
  box-sizing: border-box;
  font-size: 20px;
  line-height: 32px;
  grid-area: 2 / 5 / 3 / 11;
  margin-bottom: 0;
  margin-top: 0;
`

const RenderBody = ({ home, projects, employers, meta }) => (
  <>
    <Helmet
      title={meta.title}
      titleTemplate={`%s | ${meta.title}`}
      meta={[
        {
          name: `description`,
          content: meta.description,
        },
        {
          property: `og: title`,
          content: meta.title,
        },
        {
          property: `og: description`,
          content: meta.description,
        },
        {
          property: `og: type`,
          content: `website`,
        },
        {
          name: `twitter: card`,
          content: `summary`,
        },
        {
          name: `twitter: creator`,
          content: meta.author,
        },
        {
          name: `twitter: title`,
          content: meta.title,
        },
        {
          name: `twitter: description`,
          content: meta.description,
        },
      ].concat(meta)}
    />

    <IntroText>{RichText.render(home.intro_title)}</IntroText>

    <IntroImg
      src="https://assets.website-files.com/5b71d22309339599923cd061/5efb6f96f67a6c765adc0159_alec.jpg"
      alt=""
    />
    <IntroDesc>
      With over a decade of experience in the digital product, branding and
      visual design disciplines, I’ve been super lucky to work with a range of
      folks including Fortune 500 companies, design agencies and small to
      mid-size startups.
      <br />
      <br />
      View some of my work below. However, I can’t publically display the
      entirety of my portfolio or the brand-police will come after me! So, a
      more robust selection is available by request.
    </IntroDesc>

    <AccordionContainer allowZeroExpanded id="projects">
      {projects.map(project => (
        <AccordionRow>
          <AccordionItemButton>
            <ProjectCard
              type={RichText.asText(project.node.project_type)}
              title={RichText.asText(project.node.project_title)}
            />
          </AccordionItemButton>
          <AccordionItemPanel>
            <AccordionInner>
              <h3>
                {RichText.asText(project.node.project_date)}
                <br />
                {RichText.asText(project.node.project_team)}
              </h3>
              <p>{RichText.asText(project.node.project_description)}</p>
              {project.node.project_link_url._linkType === "Link.web" && (
                <a
                  href={Link.url(project.node.project_link_url)}
                  target="_blank"
                >
                  {RichText.asText(project.node.project_link_text)}
                </a>
              )}
              <ImageContainer>
                {project.node.project_images.map(images => (
                  <img
                    src={images.project_image.url}
                    rel="noopener noreferrer"
                  />
                ))}
              </ImageContainer>
            </AccordionInner>
          </AccordionItemPanel>
        </AccordionRow>
      ))}
    </AccordionContainer>

    <Resume id="resume">
      {employers.map(employer => (
        <EmployerRow>
          <img src={employer.node.employer_logo.url} alt="" />
          <h2>{RichText.asText(employer.node.employer_name)}</h2>
          <div className="employer-details">
            <p>{RichText.asText(employer.node.role_title)}</p>
            <p>{RichText.asText(employer.node.dates_of_employment)}</p>
          </div>
          <div className="employer-desc">
            {RichText.asText(employer.node.description)}
          </div>
        </EmployerRow>
      ))}
    </Resume>

    {home.contact_social_links.map(link => (
      <div
        className="w-layout-grid row project-row"
        css={css`
          box-sizing: border-box;
          display: grid;
          grid-auto-columns: 1fr;
          width: 100%;
          margin-bottom: 50px;
          -webkit-box-align: end;
          align-items: end;
          grid-auto-flow: row;
          column-gap: 20px;
          padding-bottom: 20px;
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
          grid-template-rows: auto;
          border-bottom-width: 2px;
          border-bottom-style: solid;
          border-bottom-color: rgb(248, 197, 190);
          grid-area: span 1 / span 10 / span 1 / span 10;
        `}
      >
        <h3
          className="project-type"
          css={css`
            box-sizing: border-box;
            margin-bottom: 10px;
            line-height: 30px;
            margin-top: 0px;
            font-size: 20px;
            font-weight: 400;
            grid-area: span 1 / span 2 / span 1 / span 2;
            align-self: baseline;
          `}
        >
          {RichText.asText(link.link_type)}
        </h3>
        <h2
          className="project-title"
          css={css`
            box-sizing: border-box;
            margin-top: 0px;
            margin-bottom: 0px;
            font-size: 80px;
            line-height: 100px;
            font-weight: 400;
            grid-area: span 1 / span 7 / span 1 / span 7;
            align-self: baseline;
          `}
        >
          {link.link_url._linkType === "Link.web" && (
            <a
              href={Link.url(link.link_url)}
              target="_blank"
              rel="noopener noreferrer"
              css={css`
                text-decoration: none;
                color: ${colors.red};
              `}
            >
              {RichText.asText(link.link_text)}
            </a>
          )}
        </h2>
      </div>
    ))}
  </>
)

export default ({ data }) => {
  //Required check for no data being returned
  const doc = data.prismic.allHomepages.edges.slice(0, 1).pop()
  const employers = data.prismic.allEmployerss.edges
  const projects = data.prismic.allProjects.edges
  const meta = data.site.siteMetadata

  if (!doc || !projects || !employers) return null

  return (
    <Layout>
      <RenderBody
        home={doc.node}
        projects={projects}
        employers={employers}
        meta={meta}
      />
    </Layout>
  )
}

RenderBody.propTypes = {
  home: PropTypes.object.isRequired,
  projects: PropTypes.array.isRequired,
  employers: PropTypes.array.isRequired,
  meta: PropTypes.object.isRequired,
}

export const query = graphql`
  {
    prismic {
      allHomepages {
        edges {
          node {
            intro_title
            about_me
            personal_image
            contact_social_links {
              link_text
              link_type
              link_url {
                ... on PRISMIC__ExternalLink {
                  _linkType
                  url
                }
              }
            }
            footer_image
          }
        }
      }
      allEmployerss {
        edges {
          node {
            employer_name
            employer_logo
            role_title
            dates_of_employment
            description
          }
        }
      }
      allProjects {
        edges {
          node {
            project_title
            project_team
            project_type
            project_date
            project_description
            project_link_text
            project_link_url {
              ... on PRISMIC__ExternalLink {
                _linkType
                url
              }
            }
            project_images {
              project_image
            }
            _meta {
              uid
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
