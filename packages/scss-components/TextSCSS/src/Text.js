import React from "react"
import "@starter-perf/tokens-scss"
import "./Text.scss"

const Text = ({ number }) => {
  return (
    <p className="text">
      Lorem ipsum {number + Math.floor(Math.random() * 100)}
    </p>
  )
}

export default Text
