import { graphql, useStaticQuery } from 'gatsby'

interface iUseSiteMetadata {
  title: string
  description: string
  lang: string
  aspectHomeFeatureImage: number
}

const useSiteMetadata = ():iUseSiteMetadata => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            description
            lang
            aspectHomeFeatureImage
          }
        }
      }
    `
  )
  return site.siteMetadata
}

export default useSiteMetadata
