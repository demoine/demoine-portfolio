import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Project01 from "../../content/assets/clients/charleston.png"
import Project02 from "../../content/assets/clients/unlv.png"
import Project03 from "../../content/assets/clients/cocacola.png"
import Project04 from "../../content/assets/clients/crowneplaza.png"
import Project05 from "../../content/assets/clients/dayton.png"
import Project06 from "../../content/assets/clients/durex.png"
import Project07 from "../../content/assets/clients/mit.png"
import Project08 from "../../content/assets/clients/mlb.png"
import Project09 from "../../content/assets/clients/msu.png"
import Project10 from "../../content/assets/clients/ogilvy.png"
import Project11 from "../../content/assets/clients/spanx.png"
import Project12 from "../../content/assets/clients/takeda.png"
import Project13 from "../../content/assets/clients/twf.png"
import Project14 from "../../content/assets/clients/ua.png"
import Project15 from "../../content/assets/clients/zoosk.png"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const ElementsPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Clients"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="heading-level-2">Clients</h2>
          <p style={{ textAlign: "center" }}>
            Below is a list of clients I've had the pleasure of working with.
          </p>

          <div className="row">
            <div className="col">
              <div
                style={{
                  padding: "1rem 0",
                  textAlign: "center",
                  background: "#eee",
                }}
              >
                <img src={Project01} alt="Project Name" />
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
                <img src={Project02} alt="Project Name" />
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
                <img src={Project03} alt="Project Name" />
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
                <img src={Project04} alt="Project Name" />
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
                <img src={Project05} alt="Project Name" />
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
                <img src={Project06} alt="Project Name" />
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
                <img src={Project07} alt="Project Name" />
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
                <img src={Project08} alt="Project Name" />
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
                <img src={Project09} alt="Project Name" />
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
                <img src={Project10} alt="Project Name" />
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
                <img src={Project11} alt="Project Name" />
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
                <img src={Project12} alt="Project Name" />
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
                <img src={Project13} alt="Project Name" />
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
                <img src={Project14} alt="Project Name" />
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
                <img src={Project15} alt="Project Name" />
              </div>
            </div>
            <div className="col">
              <div
                style={{
                  padding: "1rem 0",
                  textAlign: "center",
                  background: "#eee",
                }}
              ></div>
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
