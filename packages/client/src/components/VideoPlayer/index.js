import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'

import { VideoContainer } from 'components/VideoPlayer/styled'
import { socket } from 'utils'

export const VideoPlayer = (props) => {
  const { source } = props
  const [playing, setPlaying] = useState(false)

  const handlePlay = () => {
    // send event to play across all devices
    socket.emit("play")
  }

  const handlePause = () => {
    // send event to pause across all devices
    socket.emit("pause")
  }

  const startSocket = () => {
    // start playing video on all devices
    socket.on("playVideo", () => {
      setPlaying(true)
    })

    // start pausing video on all devices
    socket.on("pauseVideo", () => {
      setPlaying(false)
    })
  }

  useEffect(() => {
    startSocket()
  })

  return (
    <ReactPlayer
      url={source}
      onStart={() => socket.emit("play")}
      onPlay={handlePlay}
      onPause={handlePause}
      wrapper={VideoContainer}
      playbackRate={1}
      pip
      controls
      muted
      playing={playing}
      width='100%'
      height='100%'
    />
  )
}

VideoPlayer.propTypes = {
  source: PropTypes.string,
}
