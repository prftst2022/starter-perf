import React from "react"
import Block from "../components/Block"
import SomeHeader from "../components/SomeHeader"
import "./index.scss"

const arr = new Array(20)

for (let index = 0; index < arr.length; index++) {
  arr[index] = index
}

export default function SSR(props) {
  const { title } = props.serverData

  return (
    <div style={{ margin: "0 auto", maxWidth: "1200px" }}>
      <h1>Hello world! SCSS {title}</h1>
      <SomeHeader />
      {arr.map((_, index) => (
        <Block key={index} number={index} />
      ))}
    </div>
  )
}

export async function getServerData(context) {
  return {
    status: 200, // The HTTP status code that should be returned
    props: { title: "SSR" }, // Will be passed to the page component as "serverData" prop
    headers: {}, // HTTP response headers for this page
  }
}
