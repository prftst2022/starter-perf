import React from "react"
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
      <img aly="image" src="//via.placeholder.com/360x150"/>
      <SomeHeader />
      {arr.map((_, index) => (
        <Block key={index} number={index} />
      ))}
    </div>
  )
}
