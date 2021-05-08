import React, { useState } from 'react'

import { BtnPrim } from '@/components/atoms/Buttons'
import { KeyGenForm } from '@/components/templates/KeyGenForm'
import { Modal } from '@/components/templates/Modal'

import styles from './styles.module.scss'

// ___________
//
const KeyAddBtns: React.VFC = () => {
  const [display, setDisplay] = useState(false)

  return (
    <div>
      <BtnPrim>リクエスト</BtnPrim>
      <BtnPrim onClick={() => setDisplay(true)}>自作する</BtnPrim>
      <Modal display={display} handleClose={() => setDisplay(false)}>
        <KeyGenForm handleClose={() => setDisplay(false)} />
      </Modal>
    </div>
  )
}

export default KeyAddBtns
