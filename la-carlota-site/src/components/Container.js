import React from "react"

export function Container({ children }) {
  return (
    <div className="uk-container uk-container-large main-container">
      <div className="content">{children}</div>
    </div>
  )
}
