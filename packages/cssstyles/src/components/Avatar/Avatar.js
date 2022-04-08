import React from "react"
import "./Avatar.scss"

const Avatar = ({ number }) => {
  return (
    <div className="avatar">{number + Math.floor(Math.random() * 100)}</div>
  )
}

export default Avatar
