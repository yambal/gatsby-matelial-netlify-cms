import React from 'react'
import styled from 'styled-components'

interface iFeatureImage {
  src?: string
}

const FeatureImage = styled.div<iFeatureImage>`
  background-image: url(${props => props.src});
  width: 100vw;
  height: 51.67vw;
`

export default FeatureImage