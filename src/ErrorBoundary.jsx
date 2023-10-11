import { Component } from "react"
import { Link } from "react-router-dom"

class ErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.log("ErrorBoundary telah menemukan sebuah error", error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          Telah terjadi sebuah error.{" "}
          <Link to="/">Klik link ini untuk ke beranda.</Link>
        </h2>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
