import React from "react"
import Avatar from "@starter-perf/avatar-scss"
import Space from "@starter-perf/space-scss"
import Button from "@starter-perf/button-scss"
import Text from "@starter-perf/text-scss"
import TrackCard from "@starter-perf/track-card-scss"
import "./Block.scss"

const Block = ({ number }) => {
  return (
    <div className="block-wrapper">
      <h2>Start {number}</h2>
      <div className="block-header">
        <Avatar number={number} />
        <Space />
        <Button number={number} />
        <Space />
        <Text number={number} />
      </div>
      <div className="block-body">
        <TrackCard />
        <TrackCard />
      </div>

      <div className="block-body">
        <ul className="list">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(el => (
            <li className="list-item" key={el}>
              {el}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Block
