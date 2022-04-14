import React from "react"
import Block from "../components/Block"
import SomeHeader from "../components/SomeHeader"
import { css } from "@emotion/react"
// import Button from "@starter-perf/button-example"
// import { ThemeProvider } from "@emotion/react"

const wrapper = css`
  margin: 0 auto;
  max-width: 1200px;
`

const arr = new Array(20)

for (let index = 0; index < arr.length; index++) {
  arr[index] = index
}

// const theme = {
//   colors: {
//     primary: "#000",
//     text: "#2e353f",
//     textLight: "#4f5969",
//     heading: "#1a202c",
//     headingBlack: "black",
//     accent: "#d1dce5",
//     bgColor: "#e0e0e0",
//     avatar: "#88BF91",
//   },
//   spacing: {
//     s: "8px",
//     m: "16px",
//     l: "24px",
//     xl: "32px",
//   },
//   borderRadius: {
//     xs: "4px",
//     s: "8px",
//     m: "12px",
//   },
// }

export default function Home() {
  return (
    <div css={wrapper}>
      <h1>Hello world! emotion</h1>
      <SomeHeader />
      {/* <ThemeProvider theme={theme}> */}
      {/* <Button>Example Button</Button>
      </ThemeProvider> */}
      {arr.map((_, index) => (
        <Block key={index} number={index} />
      ))}
    </div>
  )
}
