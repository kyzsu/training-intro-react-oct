import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { createRoot } from "react-dom/client"
// import Pet from "./Pet"
import SearchParams from "./searchParams"
import Details from "./Details"

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>
      <Routes>
        <Route path="/details/:petId" element={<Details />} />
        <Route path="/" element={<SearchParams />} />
      </Routes>
    </BrowserRouter>
  )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(React.createElement(App))
