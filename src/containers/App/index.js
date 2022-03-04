import { Suspense, lazy } from "react"
import { BrowserRouter } from "react-router-dom"
import { Web3ReactProvider } from "@web3-react/core"

import { getLibrary } from "utils/Wallet"

import Loading from "components/Loading"

const Router = lazy(() => import("routers"))

const App = () => (
  <Suspense fallback={<Loading />}>
    <Web3ReactProvider getLibrary={getLibrary}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Web3ReactProvider>
  </Suspense>
)

export default App
