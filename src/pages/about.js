import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="ABout" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            About
          </h2>
          <figure className="kg-card kg-image-card profile-pic">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
          </figure>

          <p className="description">
            Interaction Designer currently crafting interactive kiosks at Visix.
            Studied Interactive Media Design at The Art Institute of Atlanta.
            Aside from work I enjoy spending time with family, photography,
            woodworking, and voice acting.
          </p>

          <h3 id="dynamic-styles">Skills</h3>
          <div>
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
    benchAccounting: file(relativePath: { eq: "profile-pic.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
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
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
