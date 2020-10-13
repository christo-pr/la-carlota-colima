import React, { useRef } from "react"
import UIkit from "uikit"
import { Link } from "gatsby"

export function Sidebar(props) {
  const { id } = props
  const offCanvas = useRef(null)

  const closeSidebar = () => {
    UIkit.offcanvas(offCanvas.current).hide()
  }

  return (
    <div
      id={id}
      data-uk-offcanvas="overlay: true; mode: push"
      className="sidebar"
      ref={offCanvas}
    >
      <div className="uk-offcanvas-bar">
        <button
          className="uk-offcanvas-close"
          type="button"
          data-uk-close
        ></button>

        <ul className="uk-list uk-list-divider sidebar-menu">
          <li>
            <Link to="/" onClick={closeSidebar}>
              <span
                data-uk-icon="home"
                className="uk-margin-small-right"
              ></span>
              Inicio
            </Link>
          </li>
          <li className="uk-margin-top">
            <Link to="/expenses" onClick={closeSidebar}>
              <span
                data-uk-icon="cart"
                className="uk-margin-small-right"
              ></span>
              Gastos
            </Link>
          </li>
          <li className="uk-margin-top">
            <Link to="/payments" onClick={closeSidebar}>
              <span
                data-uk-icon="credit-card"
                className="uk-margin-small-right"
              ></span>
              Pagos
            </Link>
          </li>
          <li className="uk-margin-top">
            <Link to="/paycheck-tracker" onClick={closeSidebar}>
              <span
                data-uk-icon="calendar"
                className="uk-margin-small-right"
              ></span>
              Mi quincena
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
