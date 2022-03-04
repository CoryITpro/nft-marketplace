import { ConnectorIds } from "configs"

const WalletCard = ({ connector, walletConfig, onDismiss }) => (
  <button
    variant="tertiary"
    className="flex-column rounded-sm"
    onClick={() => {
      const isIOS =
        /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MMStream

      // Since iOS does not support Trust Wallet we fall back to WalletConnect
      if (walletConfig.title === "Trust Wallet" && isIOS) {
        connector(ConnectorIds.WalletConnect)
      } else {
        connector(walletConfig.connectorId)
      }

      onDismiss()
    }}
  >
    <div className="flex">{walletConfig.icon}</div>
    <span className="flex">{walletConfig.title}</span>
  </button>
)

export default WalletCard
