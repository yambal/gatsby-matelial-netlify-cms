import { graphql, useStaticQuery } from 'gatsby'

interface iUseSiteMetadata {
  title: string
  description: string
  lang: string
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
          }
        }
      }
    `
  )
  return site.siteMetadata
}

export default useSiteMetadata
