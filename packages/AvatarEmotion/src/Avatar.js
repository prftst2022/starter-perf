import React from "react"
import * as styles from "./Avatar.styles"

const Avatar = ({ number }) => {
  return <div css={styles.avatar}>{number + Math.floor(Math.random() * 100)}</div>
}

export default Avatar
