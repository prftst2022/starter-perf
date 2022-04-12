import React from "react"
import Avatar from "@starter-perf/avatar-emotion"
import Space from "@starter-perf/space-emotion"
import Button from "@starter-perf/button-emotion"
import Text from "@starter-perf/text-emotion"
import TrackCard from "@starter-perf/track-card-emotion"
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

      <div css={styles.blockBody}>
        <ul css={styles.list}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(el => (
            <li css={styles.listItem} key={el}>{el}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Block
