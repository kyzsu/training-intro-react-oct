import React from "react"
import { createRoot } from "react-dom/client"
import Pet from "./Pet"

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="Cat" breed="British Shorthair" />
      <Pet name="Stormy" animal="Dog" breed="Labrador" />
    </div>
  )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(React.createElement(App))
