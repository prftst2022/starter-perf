import React from "react"
import Block from "../components/Block"
import SomeHeader from "../components/SomeHeader"
import * as styles from "./styles"

export default function Home() {
  return (
    <div css={styles.wrapper}>
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
