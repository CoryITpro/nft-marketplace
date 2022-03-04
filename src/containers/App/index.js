import { Suspense, lazy } from "react"
import { BrowserRouter } from "react-router-dom"

import Loading from "components/Loading"

const Router = lazy(() => import("routers"))

const App = () => (
  <Suspense fallback={<Loading />}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Suspense>
)

export default App
