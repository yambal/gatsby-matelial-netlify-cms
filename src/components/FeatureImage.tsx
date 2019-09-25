import React from 'react'
import styled from 'styled-components'
import PreviewCompatibleImage, { iPreviewCompatibleImage } from './PreviewCompatibleImage'

interface iFeatureImage extends iPreviewCompatibleImage {

}

const StyledFeatureImage = styled.div`
  width: 100vw;
  height: 52.5vw;
  position: relative;
  .gatsby-image-wrapper > div{
    padding-bottom:52.5vw !important;
  }
`

const FeatureImage:React.FC<iFeatureImage> = props => {
  return (
    <StyledFeatureImage>
      <PreviewCompatibleImage imageInfo={props.imageInfo} />
    </StyledFeatureImage>
  )
}

export default FeatureImage