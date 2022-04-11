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

export default function SSR(props) {
  const { title } = props.serverData

  return (
    <div css={wrapper}>
      <h1>Hello world! emotion {title}</h1>
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
