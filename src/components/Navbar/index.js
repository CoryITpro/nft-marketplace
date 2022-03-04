import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faShopSlash,
  faGears,
  faWallet,
} from "@fortawesome/free-solid-svg-icons"

import { AppRoutes } from "configs"

import "./style.scss"

const Navbar = () => (
  <div className="navbar flex">
    <div className="navbar-wrapper navbar-container flex">
      <div className="navbar-menu flex">
        <NavLink className="navbar-logo flex" to={AppRoutes.DASHBOARD}>
          <FontAwesomeIcon icon={faShopSlash} />
          <div className="navbar-logo-title flex-column">
            <span>Black</span>
            <span>Market</span>
          </div>
        </NavLink>
        <div className="navbar-links flex">
          <NavLink className="flex rounded-sm" to={AppRoutes.EXPLORE}>
            Explore
          </NavLink>
          <NavLink className="flex rounded-sm" to={AppRoutes.STATS}>
            Stats
          </NavLink>
        </div>
      </div>
      <div className="navbar-setting flex">
        <FontAwesomeIcon className="flex rounded-sm" icon={faGears} />
        <div className="navbar-setting-wallet flex">
          <div className="navbar-setting-wallet-icon shadowed flex rounded-circle">
            <FontAwesomeIcon className="flex" icon={faWallet} />
          </div>
          <div className="navbar-setting-wallet-main rounded-sm">
            <button>Connect</button>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Navbar
