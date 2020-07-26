import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"

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
          <h2 id="heading-level-2">Contact</h2>

          - <form method="post" action="#">
+ <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
+   <input type="hidden" name="bot-field" />
+   <input type="hidden" name="form-name" value="contact" />
  ...
            <div className="row gtr-uniform">
              <div className="col-12 ">
                <input
                  type="text"
                  name="demo-name"
                  id="demo-name"
                  defaultValue=""
                  placeholder="Name"
                />
              </div>
              <div className="col-12 ">
                <input
                  type="email"
                  name="demo-email"
                  id="demo-email"
                  defaultValue=""
                  placeholder="Email"
                />
              </div>

              {/* Break */}
              <div className="col-12">
                <textarea
                  name="demo-message"
                  id="demo-message"
                  placeholder="Enter your message"
                  rows={6}
                  defaultValue={""}
                />
              </div>
              {/* Break */}
              <div className="col-12">
                <ul className="actions">
                  <li>
                    <input
                      type="submit"
                      defaultValue="Send Message"
                      className="primary"
                    />
                  </li>
                  <li>
                    <input type="reset" defaultValue="Reset" />
                  </li>
                </ul>
              </div>
            </div>
          </form>
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
