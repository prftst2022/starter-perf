/** @jsx jsx */
import { jsx } from "@emotion/react"
import * as styles from "./Text.styles"

const Text = ({ number }) => {
  return (
    <p css={styles.text}>
      Lorem ipsum {number + Math.floor(Math.random() * 100)}
    </p>
  )
}

export default Text
