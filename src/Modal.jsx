import React, { useEffect, useRef } from "react"
import { createPortal } from "react-dom"

const Modal = ({ children }) => {
  const elRef = useRef(null)

  //   step 1
  if (!elRef.current) {
    elRef.current = document.createElement("div")
  }

  //   step 2
  useEffect(() => {
    const modalRoot = document.getElementById("modal")
    modalRoot.appendChild(elRef.current)

    // Cleanup function jika modalnya ditutup
    return () => modalRoot.removeChild(elRef.current)
  }, [])

  //   step 3
  return createPortal(<div>{children}</div>, elRef.current)
}

export default Modal
