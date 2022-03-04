import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBinoculars,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons"

import { AppRoutes } from "configs"

import "./style.scss"

const MobileMenu = () => (
  <div className="mobile-menu flex">
    <div className="mobile-menu-wrapper navbar-container flex">
      <NavLink to={AppRoutes.EXPLORE} className="flex-column">
        <div className="flex">
          <FontAwesomeIcon icon={faBinoculars} />
        </div>
        <span>Explore</span>
      </NavLink>
      <NavLink to={AppRoutes.STATS} className="flex-column">
        <div className="flex">
          <FontAwesomeIcon icon={faClipboardList} />
        </div>
        <span>Stats</span>
      </NavLink>
    </div>
  </div>
)

export default MobileMenu
