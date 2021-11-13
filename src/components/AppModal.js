import React from "react"
import { Modal } from "antd"

function AppModal({ title, isModalVisible, handleOk, handleCancel, children }) {
  return (
    <Modal
      title={title}
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      {children}
    </Modal>
  )
}

export default AppModal
