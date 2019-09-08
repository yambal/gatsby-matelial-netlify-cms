import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import BrogRollArticle from './molecules/BlogRollArticle'
import Grid from '@material-ui/core/Grid';

const BlogRoll:React.FC<any> = (props) =>  {
  const { data } = props
  const { edges: posts } = data.allMarkdownRemark

  return (
    <Grid container spacing={3}>
      {posts &&
        posts.map(({ node: post }) => (
          <Grid item sm={12} md={4} lg={3}>
            <BrogRollArticle post={post} key={post.id}/>
          </Grid>
        ))}
    </Grid>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => {
      return(
        <BlogRoll data={data} count={count} />
      )
    }}
  />
)
