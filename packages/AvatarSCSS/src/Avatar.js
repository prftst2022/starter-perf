import React from "react"
import "@starter-perf/tokens-scss"
import "./Avatar.scss"

const Avatar = ({ number }) => {
  return (
    <div className="avatar">{number + Math.floor(Math.random() * 100)}</div>
  )
}

export default Avatar
