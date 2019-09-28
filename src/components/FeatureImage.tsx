import React from 'react'
import styled from 'styled-components'
import PreviewCompatibleImage, { iPreviewCompatibleImage } from './PreviewCompatibleImage'

interface iFeatureImage extends iPreviewCompatibleImage {
  aspect?: number
}

const StyledFeatureImage = styled.div<iFeatureImage>`
  width: 100vw;
  height: ${props => props.aspect ? props.aspect * 100 : 52.5}vw;
  position: relative;
  .gatsby-image-wrapper > div{
    padding-bottom:${props => props.aspect ? props.aspect * 100 : 52.5}vw !important;
  }
`

const StyledFeatureImageInner = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

const FeatureImage:React.FC<iFeatureImage> = props => {
  console.log(27, props)
  return (
    <StyledFeatureImage {...props}>
      <PreviewCompatibleImage imageInfo={props.imageInfo} />
      <StyledFeatureImageInner>{props.children}</StyledFeatureImageInner>
    </StyledFeatureImage>
  )
}

export default FeatureImage