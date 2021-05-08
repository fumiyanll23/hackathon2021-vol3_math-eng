/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'

import styles from './styles.module.scss'

// ___________
//
interface ModalProps {
  display: boolean
  handleClose: () => void
}

// ___________
//
const Modal: React.FC<ModalProps> = ({ display, handleClose, children }) => {
  return (
    <>
      {display && (
        <div className={styles.Modal}>
          <div className={styles.bg} onClick={handleClose} />
          <div className={styles.body}>{children}</div>
        </div>
      )}
    </>
  )
}

export default Modal
