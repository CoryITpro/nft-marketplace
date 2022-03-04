import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {} from "@fortawesome/free-regular-svg-icons"

import { AppRoutes } from "configs"

import "./style.scss"

const Footer = () => (
  <div className="footer flex">
    <div className="footer-wrapper container grid">
      <div className="footer-introduce flex-column">
        <h3>Black Market</h3>
        <p>
          Brand-new digital marketplace for NFTs. Buy, Sell, and discover
          exclusive digital items
        </p>
        <div className="footer-introduce-socials"></div>
      </div>
      <div className="footer-links grid">
        <div className="footer-links-marketplace flex-column">
          <h4>Marketplace</h4>
          <NavLink to={AppRoutes.EXPLORE}>All NFTs</NavLink>
        </div>
        <div className="footer-links-account flex-column">
          <h4>My Account</h4>
          <NavLink to={AppRoutes.ACCOUNT}>Account</NavLink>
        </div>
        <div className="footer-links-resources flex-column">
          <h4>Resources</h4>
          <NavLink to={AppRoutes.COMING_SOON}>Docs</NavLink>
        </div>
        <div className="footer-links-company flex-column">
          <h4>Company</h4>
          <NavLink to={AppRoutes.COMING_SOON}>About</NavLink>
        </div>
      </div>
    </div>
  </div>
)

export default Footer
