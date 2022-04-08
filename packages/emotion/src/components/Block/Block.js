import React from "react"
import Avatar from "../Avatar"
import Space from "../Space"
import Button from "../Button"
import Text from "../Text"
import TrackCard from "../TrackCard"
import * as styles from "./Block.styles"

const Block = ({ number }) => {
  return (
    <div css={styles.blockWrapper}>
      <h2>Start {number}</h2>
      <div css={styles.blockHeader}>
        <Avatar number={number} />
        <Space />
        <Button number={number} />
        <Space />
        <Text number={number} />
      </div>
      <div css={styles.blockBody}>
        <TrackCard />
        <TrackCard />
      </div>
    </div>
  )
}

export default Block
