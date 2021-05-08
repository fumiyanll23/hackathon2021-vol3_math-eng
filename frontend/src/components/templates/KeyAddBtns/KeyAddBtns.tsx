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
    <>
      <div className={styles.KeyAddBtns}>
        <div>
          <BtnPrim>リクエスト</BtnPrim>
        </div>
        <div>
          <BtnPrim onClick={() => setDisplay(true)}>自作する</BtnPrim>
        </div>
      </div>
      <Modal display={display} handleClose={() => setDisplay(false)}>
        <KeyGenForm handleClose={() => setDisplay(false)} />
      </Modal>
    </>
  )
}

export default KeyAddBtns
