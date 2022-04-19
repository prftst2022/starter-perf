import "./App.css"
import Block from "./components/Block"
import SomeHeader from "./components/SomeHeader"

const arr = new Array(20)

for (let index = 0; index < arr.length; index++) {
  arr[index] = index
}

function App() {
  return (
    <div style={{ margin: "0 auto", maxWidth: "1200px" }}>
      <h1>Hello world! Emotion React</h1>
      <SomeHeader />
      {arr.map((_, index) => (
        <Block key={index} number={index} />
      ))}
    </div>
  )
}

export default App
