import React from "react"
import Block from "../components/Block"
import SomeHeader from "../components/SomeHeader"
import { css } from "@emotion/react"

const wrapper = css`
  margin: 0 auto;
  max-width: 1200px;
`

export default function Home() {
  return (
    <div css={wrapper}>
      <h1>Hello world!</h1>
      <SomeHeader />
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
    </div>
  )
}
