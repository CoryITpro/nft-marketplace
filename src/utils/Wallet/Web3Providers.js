import { providers } from "ethers"
import { RPC_URL } from "configs"

const { StaticJsonRpcProvider } = providers
const rpcUrl = RPC_URL.chainId

const simpleRpcProvider = new StaticJsonRpcProvider(rpcUrl)

export default simpleRpcProvider
