import { useState } from "react"
import Modal from "components/Modal"
import { useWeb3React } from "@web3-react/core"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faXmark,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons"

import WalletCard from "./WalletCard"

import useAuth from "hooks/Wallet/useAuth"

import { Connectors } from "configs"

const WalletButton = ({ children, ...restProps }) => {
  const { account } = useWeb3React()
  const { login, logout } = useAuth()

  const [modalIsOpen, setModalOpen] = useState(false)

  const openModal = () => {
    setModalOpen(true)
  }

  const afterOpenModal = () => {}

  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <>
      <button {...restProps} onClick={openModal}>
        {children}
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Connect Wallet"
        ariaHideApp={false}
      >
        <div className="modal-header flex">
          <h3>Connect Wallet</h3>
          <FontAwesomeIcon icon={faXmark} onClick={closeModal} />
        </div>
        <div className="modal-wallets grid">
          {Connectors.map((data, index) => (
            <WalletCard
              key={index}
              connector={login}
              walletConfig={data}
              onDismiss={closeModal}
            />
          ))}
        </div>
        {account && account !== "" ? (
          <div className="modal-disconnect">
            <button
              className="flex rounded-sm"
              onClick={() => {
                logout()
                closeModal()
              }}
            >
              <span className="flex">Disconnect</span>
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </button>
          </div>
        ) : (
          <></>
        )}
      </Modal>
    </>
  )
}

export default WalletButton
