import React, { useState } from "react"

import { registerNewStore } from "../utils/api"
import { SEO } from "../components/"
import { RegisterForm, Button } from "../styles"

export default function Register(props) {
  const [url, setUrl] = useState("")
  const [name, setName] = useState("")
  const [loading, setLoading] = useState(false)

  const registerStore = async e => {
    e.preventDefault()

    setLoading(true)
    const data = await registerNewStore({ url, name })
    setLoading(false)
    console.log("registerStore -> data", data)
  }

  return (
    <>
      <SEO title="Registra un lugar" />
      <RegisterForm onSubmit={registerStore}>
        <p>
          Por el momento, el proceso de registro para un lugar es muy simple,
          mandanos su Facebook, y nosotros hacemos el resto.
          <br /> Recuerda, <b>TODOS</b> los lugares en <span>La Carlota</span>{" "}
          son recomendaciones locales.
        </p>
        <div className="form-group">
          <input
            type="text"
            placeholder="Facebook URL"
            value={url}
            onChange={e => setUrl(e.target.value)}
            required
          />
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <Button>Enviar</Button>
      </RegisterForm>
    </>
  )
}
