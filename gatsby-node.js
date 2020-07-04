const path = require("path")

// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors
    }
    return result
  })

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await wrapper(
    graphql(`
      {
        prismic {
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
      }
    `)
  )

  const projectsList = result.data.prismic.allProjects.edges

  const projectTemplate = require.resolve("./src/templates/project.jsx")

  projectsList.forEach(edge => {
    // The uid you assigned in Prismic is the slug!
    createPage({
      type: "Project",
      match: "/work/:uid",
      path: `/work/${edge.node._meta.uid}`,
      component: projectTemplate,
      context: {
        // Pass the unique ID (uid) through context so the template can filter by it
        uid: edge.node._meta.uid,
      },
    })
  })
}
