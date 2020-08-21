import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import XDLogo from "../../content/assets/skills/Adobe_XD_CC_icon.png"
import FigmaLogo from "../../content/assets/skills/figma.png"
import SketchLogo from "../../content/assets/skills/sketch.png"
import PrincipleLogo from "../../content/assets/skills/principle-app.png"
import PhotoshopLogo from "../../content/assets/skills/Adobe_Photoshop_CC_icon.png"
import IllustratorLogo from "../../content/assets/skills/Adobe_Illustrator_CC_icon.png"
import AfterEffectsLogo from "../../content/assets/skills/Adobe_After_Effects_CC_icon.png"
import PremierProLogo from "../../content/assets/skills/Adobe_Premiere_Pro_CC_icon.png"
import VisualStudioCodeLogo from "../../content/assets/skills/visual-studio-code.png"
import Html5Logo from "../../content/assets/skills/html-5.png"
import Css3Logo from "../../content/assets/skills/css-3.png"
import JavascriptLogo from "../../content/assets/skills/javascript.png"
import ReactJsLogo from "../../content/assets/skills/react.png"
import GsapLogo from "../../content/assets/skills/GSAP.png"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

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
              <div className="col skill-logo">
                <div
                  style={{
                    padding: "1rem 0",
                    textAlign: "center",
                    background: "transparent",
                  }}
                >
                  <img src={XDLogo} alt="Adobe XD" />
                </div>
              </div>
              <div className="col skill-logo">
                <div
                  style={{
                    padding: "1rem 0",
                    textAlign: "center",
                    background: "transparent",
                  }}
                >
                  <img src={FigmaLogo} alt="Figma" />
                </div>
              </div>
              <div className="col skill-logo">
                <div
                  style={{
                    padding: "1rem 0",
                    textAlign: "center",
                    background: "transparent",
                  }}
                >
                  <img src={SketchLogo} alt="Sketch" />
                </div>
              </div>
              <div className="col skill-logo">
                <div
                  style={{
                    padding: "1rem 0",
                    textAlign: "center",
                    background: "transparent",
                  }}
                >
                  <img src={PrincipleLogo} alt="Principle" />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col skill-logo">
                <div
                  style={{
                    padding: "1rem 0",
                    textAlign: "center",
                    background: "transparent",
                  }}
                >
                  <img src={PhotoshopLogo} alt="Adobe Photoshop" />
                </div>
              </div>
              <div className="col skill-logo">
                <div
                  style={{
                    padding: "1rem 0",
                    textAlign: "center",
                    background: "transparent",
                  }}
                >
                  <img src={IllustratorLogo} alt="Adobe Illustrator" />
                </div>
              </div>
              <div className="col skill-logo">
                <div
                  style={{
                    padding: "1rem 0",
                    textAlign: "center",
                    background: "transparent",
                  }}
                >
                  <img src={AfterEffectsLogo} alt="Adobe After Effects" />
                </div>
              </div>
              <div className="col skill-logo">
                <div
                  style={{
                    padding: "1rem 0",
                    textAlign: "center",
                    background: "transparent",
                  }}
                >
                  <img src={PremierProLogo} alt="Adobe Primier Pro" />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col skill-logo">
                <div
                  style={{
                    padding: "1rem 0",
                    textAlign: "center",
                    background: "transparent",
                  }}
                >
                  <img src={VisualStudioCodeLogo} alt="Visual Studio Code" />
                </div>
              </div>
              <div className="col skill-logo">
                <div
                  style={{
                    padding: "1rem 0",
                    textAlign: "center",
                    background: "transparent",
                  }}
                >
                  <img src={Html5Logo} alt="HTML(5)" />
                </div>
              </div>
              <div className="col skill-logo">
                <div
                  style={{
                    padding: "1rem 0",
                    textAlign: "center",
                    background: "transparent",
                  }}
                >
                  <img src={Css3Logo} alt="CSS(3)" />
                </div>
              </div>
              <div className="col skill-logo">
                <div
                  style={{
                    padding: "1rem 0",
                    textAlign: "center",
                    background: "transparent",
                  }}
                >
                  <img src={JavascriptLogo} alt="JavaScript" />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col skill-logo">
                <div
                  style={{
                    padding: "1rem 0",
                    textAlign: "center",
                    background: "transparent",
                  }}
                ></div>
              </div>

              <div className="col skill-logo">
                <div
                  style={{
                    padding: "1rem 0",
                    textAlign: "center",
                    background: "transparent",
                  }}
                >
                  <img src={ReactJsLogo} alt="ReactJS" />
                </div>
              </div>
              <div className="col skill-logo">
                <div
                  style={{
                    padding: "1rem 0",
                    textAlign: "center",
                    background: "transparent",
                  }}
                >
                  <img src={GsapLogo} alt="GSAP" />
                </div>
              </div>
              <div className="col skill-logo">
                <div
                  style={{
                    padding: "1rem 0",
                    textAlign: "center",
                    background: "transparent",
                  }}
                ></div>
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
