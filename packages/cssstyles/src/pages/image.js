import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Block from "../components/Block"
import SomeHeader from "../components/SomeHeader"
import "./index.scss"

const arr = new Array(20)

for (let index = 0; index < arr.length; index++) {
  arr[index] = index
}

export default function Image() {
  return (
    <div style={{ margin: "0 auto", maxWidth: "1200px" }}>
      <h1>Hello world! SCSS</h1>
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
