import React from "react"
import "@starter-perf/tokens-scss"
import "./Button.scss"

const Button = ({ number }) => {
  return (
    <button
      type="button"
      aria-label={`click on button ${number}`}
      className="button"
    >
      Click me {number}
    </button>
  )
}

export default Button
