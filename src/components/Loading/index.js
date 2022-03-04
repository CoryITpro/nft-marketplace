import { SpinnerInfinity } from "spinners-react"
import { useWindowSize } from "@withvoid/melting-pot"

import "./style.scss"

const Loading = () => {
  const { width } = useWindowSize()

  return (
    <div className="loading flex-column">
      {width > 425 ? <h2>Black Market</h2> : <h3>Black Market</h3>}
      <SpinnerInfinity
        size={width > 425 ? 128 : 96}
        thickness={width > 425 ? 150 : 120}
        speed={124}
        color={"rgb(148, 239, 201)"}
        secondaryColor={"rgba(0, 0, 0, 0.4)"}
      />
    </div>
  )
}

export default Loading
