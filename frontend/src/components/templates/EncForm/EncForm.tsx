import React from 'react'

import { BtnPrim } from '@/components/atoms/Buttons'
import { TextInput } from '@/components/atoms/TextInput'

import styles from './styles.module.scss'

// ___________
//
const EncForm: React.VFC = () => {
  return (
    <form className={styles.EncForm}>
      <div className={styles.Input}>
        <TextInput type="text" placeholder="メッセージ" />
      </div>
      <div className={styles.Submit}>
        <BtnPrim type="submit">暗号化</BtnPrim>
      </div>
    </form>
  )
}

export default EncForm
