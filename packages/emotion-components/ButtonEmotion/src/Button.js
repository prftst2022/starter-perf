/** @jsx jsx */
import { jsx } from "@emotion/react"
import * as styles from "./Button.styles"

const Button = ({ number }) => {
  return (
    <button
      type="button"
      aria-label={`click on button ${number}`}
      css={styles.button}
    >
      Click me {number}
    </button>
  )
}

export default Button
