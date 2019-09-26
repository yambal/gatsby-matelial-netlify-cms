import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { IndexPageTemplate } from '../components/templates';

const IndexPage:React.FC<any> = (props) => {
  const { frontmatter } = props.data.markdownRemark
  const { image, title, heading, subheading, mainpitch, description, intro, featuredimage } = frontmatter
  return (
    <Layout>
      <IndexPageTemplate
        image={image}
        title={title}
        heading={heading}
        subheading={subheading}
        mainpitch={mainpitch}
        description={description}
        intro={intro}
        featuredimage={featuredimage}
      />
    </Layout>
  )
}


export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 1280, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
