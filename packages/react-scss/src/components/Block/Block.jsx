import React from "react"
import Avatar from "@starter-perf/avatar-scss"
import Space from "@starter-perf/space-scss"
import Button from "@starter-perf/button-scss"
import Text from "@starter-perf/text-scss"
import TrackCard from "@starter-perf/track-card-scss"
import styles from "./Block.module.css"

const Block = ({ number }) => {
  return (
    <div className={styles["block-wrapper"]}>
      <h2>Start {number}</h2>
      <div className={styles["block-header"]}>
        <Avatar number={number} />
        <Space />
        <Button number={number} />
        <Space />
        <Text number={number} />
      </div>
      <div className={styles["block-body"]}>
        <TrackCard />
        <TrackCard />
      </div>

      <div className={styles["block-body"]}>
        <ul className={styles["list"]}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(el => (
            <li className={styles["list-item"]} key={el}>
              {el}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Block
