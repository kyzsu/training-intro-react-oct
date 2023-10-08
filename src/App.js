import React from "react"
import { createRoot } from "react-dom/client"

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ])
}

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Cat",
      breed: "British Shorthair",
    }),
  ])
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(React.createElement(App))
