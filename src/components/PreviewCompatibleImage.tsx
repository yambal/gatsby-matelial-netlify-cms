import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

export interface iPreviewCompatibleImage {
  imageInfo: {
    alt?: string
    childImageSharp?: any
    image?: any
  }
}

interface iClopImage {
  src: string
}
const ClipImage = styled.div<iClopImage>`
  background-image: url(${props => props.src});
  position: absolute;
  top: 0;
  right:0;
  bottom:0;
  left:0;
`

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
    //return <img src={image} alt={alt} />
    return <ClipImage src={image}></ClipImage>
  }

  return null
}

export default PreviewCompatibleImage
