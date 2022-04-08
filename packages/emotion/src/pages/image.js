import React from "react"
import { StaticImage } from "gatsby-plugin-image"
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
      <StaticImage
        style={{ width: "450px", height: "150px" }}
        src="https://placekitten.com/900/300"
        alt="A kitten"
      />
      <SomeHeader />
      {arr.map((_, index) => (
        <Block key={index} number={index} />
      ))}
    </div>
  )
}
