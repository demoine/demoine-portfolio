import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const ElementsPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="heading-level-2">Clients</h2>
          <hr />

          <div className="row">
            <div className="col">
              <div
                style={{
                  padding: "1rem 0",
                  textAlign: "center",
                  background: "#eee",
                }}
              >
                auto
              </div>
            </div>
            <div className="col">
              <div
                style={{
                  padding: "1rem 0",
                  textAlign: "center",
                  background: "#eee",
                }}
              >
                auto
              </div>
            </div>
            <div className="col">
              <div
                style={{
                  padding: "1rem 0",
                  textAlign: "center",
                  background: "#eee",
                }}
              >
                auto
              </div>
            </div>
            <div className="col">
              <div
                style={{
                  padding: "1rem 0",
                  textAlign: "center",
                  background: "#eee",
                }}
              >
                auto
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div
                style={{
                  padding: "1rem 0",
                  textAlign: "center",
                  background: "#eee",
                }}
              >
                auto
              </div>
            </div>
            <div className="col">
              <div
                style={{
                  padding: "1rem 0",
                  textAlign: "center",
                  background: "#eee",
                }}
              >
                auto
              </div>
            </div>
            <div className="col">
              <div
                style={{
                  padding: "1rem 0",
                  textAlign: "center",
                  background: "#eee",
                }}
              >
                auto
              </div>
            </div>
            <div className="col">
              <div
                style={{
                  padding: "1rem 0",
                  textAlign: "center",
                  background: "#eee",
                }}
              >
                auto
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div
                style={{
                  padding: "1rem 0",
                  textAlign: "center",
                  background: "#eee",
                }}
              >
                auto
              </div>
            </div>
            <div className="col">
              <div
                style={{
                  padding: "1rem 0",
                  textAlign: "center",
                  background: "#eee",
                }}
              >
                auto
              </div>
            </div>
            <div className="col">
              <div
                style={{
                  padding: "1rem 0",
                  textAlign: "center",
                  background: "#eee",
                }}
              >
                auto
              </div>
            </div>
            <div className="col">
              <div
                style={{
                  padding: "1rem 0",
                  textAlign: "center",
                  background: "#eee",
                }}
              >
                auto
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div
                style={{
                  padding: "1rem 0",
                  textAlign: "center",
                  background: "#eee",
                }}
              >
                auto
              </div>
            </div>
            <div className="col">
              <div
                style={{
                  padding: "1rem 0",
                  textAlign: "center",
                  background: "#eee",
                }}
              >
                auto
              </div>
            </div>
            <div className="col">
              <div
                style={{
                  padding: "1rem 0",
                  textAlign: "center",
                  background: "#eee",
                }}
              >
                auto
              </div>
            </div>
            <div className="col">
              <div
                style={{
                  padding: "1rem 0",
                  textAlign: "center",
                  background: "#eee",
                }}
              >
                auto
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    smallPic: file(
      relativePath: { eq: "fabio-comparelli-696506-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    medPic: file(relativePath: { eq: "sophia-valkova-30139-unsplash.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    largePic: file(
      relativePath: { eq: "vladimir-malyutin-98174-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <ElementsPage location={props.location} data={data} {...props} />
    )}
  />
)
