import React, { useState } from "react"

import { registerNewStore } from "../utils/api"
import { SEO, RegisterForm, Alert } from "../components/"

export default function Register(props) {
  const [alert, setAlert] = useState(null)

  const registerStore = async data => {
    const { url, name } = data

    setAlert(null)
    const response = await registerNewStore({ url, name })
    console.log("registerStore -> response", response)
    setAlert(response)
  }

  return (
    <>
      {alert && <Alert {...alert} />}
      <SEO title="Registra un lugar" />
      <RegisterForm onRegisterStore={registerStore} />
    </>
  )
}
