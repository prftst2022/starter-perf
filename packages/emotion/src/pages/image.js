import React from "react"
import Block from "../components/Block"
import SomeHeader from "../components/SomeHeader"
import { css } from "@emotion/react"

const wrapper = css`
  margin: 0 auto;
  max-width: 1200px;
`

const arr = new Array(20)

for (let index = 0; index < arr.length; index++) {
  arr[index] = index
}

export default function Image() {
  return (
    <div css={wrapper}>
      <h1>Hello world! emotion</h1>
      <img aly="image" src="//via.placeholder.com/360x150"/>
      <SomeHeader />
      {arr.map((_, index) => (
        <Block key={index} number={index} />
      ))}
    </div>
  )
}
