import React from 'react'

interface iFeatureImage {
  src?: string
}

const FeatureImage:React.FC<iFeatureImage> = props => {
    return (
      <div style={{ backgroundImage: `url(${props.src})`, width: '100vw', height: '51.67vw'}}>

      </div>
    )
}

export default FeatureImage