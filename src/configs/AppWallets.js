import { Metamask, WalletConnect } from "resources/Icons"

export const ConnectorIds = {
  Injected: "injected",
  WalletConnect: "walletconnect",
}

const Connectors = [
  {
    title: "Metamask",
    icon: <Metamask />,
    connectorId: ConnectorIds.Injected,
    priority: 1,
  },
  // {
  //   title: "Wallet Connect",
  //   icon: <WalletConnect />,
  //   connectorId: ConnectorIds.WalletConnect,
  //   priority: 2,
  // },
]

export default Connectors
