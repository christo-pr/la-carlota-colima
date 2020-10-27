import React, { useState, useEffect } from "react"
import { AiOutlineCloseCircle as CloseIcon } from "react-icons/ai"

import { AppAlert } from "../../styles"

var alertTimeout

export function Alert(props) {
  const { type, message } = props
  const [showAlert, setShowAlert] = useState(true)

  // Auto-hide the alert after 3 sec
  useEffect(() => {
    alertTimeout = setTimeout(() => {
      setShowAlert(false)
    }, 3000)

    return () => {
      clearTimeout(alertTimeout)
    }
  }, [])

  return (
    <AppAlert type={type} show={showAlert}>
      {message}
      <CloseIcon
        onClick={() => {
          setShowAlert(false)
          clearTimeout(alertTimeout)
        }}
      />
    </AppAlert>
  )
}
