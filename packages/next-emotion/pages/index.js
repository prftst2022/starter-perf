import Head from "next/head"
import Block from "../components/Block"
import SomeHeader from "../components/SomeHeader"

const arr = new Array(20)

for (let index = 0; index < arr.length; index++) {
  arr[index] = index
}

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ margin: "0 auto", maxWidth: "1200px" }}>
        <h1>Hello world! Emotion next</h1>
        <SomeHeader />
        {arr.map((_, index) => (
          <Block key={index} number={index} />
        ))}
      </div>
    </div>
  )
}
