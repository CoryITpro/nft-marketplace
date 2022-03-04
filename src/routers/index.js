import { useRoutes } from "react-router-dom"

import UseScrollToTop from "hooks/useScrollToTop"

import Navbar from "components/Navbar"
import Footer from "components/Footer"
import ComingSoon from "components/ComingSoon"
import NotFound from "components/NotFound"

import Dashboard from "./Dashboard"
import Account from "./Account"

import { AppRoutes } from "configs"

const Router = () => {
  let routes = useRoutes([
    { path: AppRoutes.DASHBOARD, element: <Dashboard /> },
    { path: AppRoutes.ACCOUNT, element: <Account /> },
    { path: AppRoutes.COMING_SOON, element: <ComingSoon /> },
    { path: AppRoutes.NOT_FOUND, element: <NotFound /> },
  ])

  return (
    <>
      <Navbar />
      <UseScrollToTop>{routes}</UseScrollToTop>
      <Footer />
    </>
  )
}

export default Router
