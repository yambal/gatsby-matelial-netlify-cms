import React from 'react'
import { Link, graphql } from 'gatsby'

import Features from '../Features'
import BlogRoll from '../BlogRoll'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import PreviewCompatibleImage from '../PreviewCompatibleImage'
import FeatureImage from '../FeatureImage';
import useSiteMetadata from '../SiteMetadata'

interface iIndexPageTemplate {
  image: any
  title: any
  heading: any
  subheading: any
  mainpitch: any
  description: any
  intro: any,
  featuredimage: any,
}

const IndexPageTemplate:React.FC<iIndexPageTemplate> = (props) => {
  const {
    image,
    title,
    heading,
    subheading,
    mainpitch,
    description,
    intro,
    featuredimage
  } = props
  const { aspectHomeFeatureImage } = useSiteMetadata()
  console.log(aspectHomeFeatureImage)

  return (
  <React.Fragment>
    <FeatureImage imageInfo={featuredimage} aspect={aspectHomeFeatureImage}>
      <Container>
        {title}
        {subheading}
      </Container>
    </FeatureImage>

    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                <Features gridItems={intro.blurbs} />
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
                  </div>
                </div>
                <Container fixed>
                  <Typography variant="h4" gutterBottom>Latest stories</Typography>
                  <BlogRoll />
                  <Link className="btn" to="/blog">
                    Read more
                  </Link>
                </Container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>
  )
}

export default IndexPageTemplate