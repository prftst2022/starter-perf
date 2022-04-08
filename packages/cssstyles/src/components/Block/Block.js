import React from "react"
import Avatar from "../Avatar"
import Space from "../Space"
import Button from "../Button"
import Text from "../Text"
import TrackCard from "../TrackCard"
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
