import React from "react"
import Avatar from "../Avatar"
import Space from "../Space"
import Button from "../Button"
import Text from "../Text"
import * as styles from "./Block.styles"

const Block = () => {
  return (
    <div css={styles.blockWrapper}>
      <h2>Start</h2>
      <div css={styles.blockHeader}>
        <Avatar />
        <Space />
        <Button />
        <Space />
        <Text />
      </div>
    </div>
  )
}

export default Block
