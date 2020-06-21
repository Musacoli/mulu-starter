import React from 'react'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'

import { VideoContainer } from 'components/VideoPlayer/styled'

export const VideoPlayer = (props) => {
  const { source } = props

  return (
    <ReactPlayer
      url={source}
      wrapper={VideoContainer}
      pip
      controls
      width="100vw"
    />
  )
}

VideoPlayer.propTypes = {
  source: PropTypes.string,
}
