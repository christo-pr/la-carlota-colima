import React, { useState } from "react"

import { Form, Button, Loading } from "../styles"

export function RegisterForm(props) {
  const { onRegisterStore } = props
  const [url, setUrl] = useState("")
  const [name, setName] = useState("")
  const [loading, setLoading] = useState(false)

  return (
    <Form
      onSubmit={async e => {
        e.preventDefault()
        setLoading(true)
        await onRegisterStore({ url, name })
        setLoading(false)

        setUrl("")
        setName("")
      }}
    >
      <p>
        Por el momento, el proceso de registro para un lugar es muy simple,
        mandanos su Facebook, y nosotros hacemos el resto.
        <br /> Recuerda, <b>TODOS</b> los lugares en <span>La Carlota</span> son
        recomendaciones locales.
      </p>
      <div className="form-group">
        <input
          type="text"
          placeholder="Facebook URL"
          value={url}
          onChange={e => setUrl(e.target.value)}
          disabled={loading}
          required
        />
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <Button>{loading ? <Loading /> : "Enviar"}</Button>
    </Form>
  )
}
