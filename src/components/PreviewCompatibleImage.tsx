import React from 'react'
import Img from 'gatsby-image'

export interface iPreviewCompatibleImage {
  imageInfo: {
    alt?: string
    childImageSharp?: any
    image?: any
  }
}

const PreviewCompatibleImage:React.FC<iPreviewCompatibleImage> = props => {
  const { alt = '', childImageSharp, image } = props.imageInfo

  if (!!image && !!image.childImageSharp) {
    return (
      <Img fluid={image.childImageSharp.fluid} alt={alt} />
    )
  }

  if (!!childImageSharp) {
    return <Img fluid={childImageSharp.fluid} alt={alt} />
  }

  if (!!image && typeof image === 'string') {
    return <img src={image} alt={alt} />
  }

  return null
}

export default PreviewCompatibleImage
