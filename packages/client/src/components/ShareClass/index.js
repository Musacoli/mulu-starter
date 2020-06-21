import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'
import Overlay from 'react-bootstrap/Overlay'
import Tooltip from 'react-bootstrap/Tooltip'

export const ShareClass = (props) => {
  const { url } = props

  const [show, setShow] = useState(false)

  const target = useRef(null)

  const copy = () => {
    navigator.clipboard.writeText(url)
    setShow(true)
    setTimeout(() => setShow(false), 3000)
  }

  return (
    <div>
      <Button ref={target} onClick={copy}>
        Share
      </Button>
      <Overlay target={target.current} show={show} placement="right">
        {(data) => (
          <Tooltip id="tooltip-copy" {...data}>
            Link copied!
          </Tooltip>
        )}
      </Overlay>
    </div>
  )
}

ShareClass.propTypes = {
  url: PropTypes.string,
}
