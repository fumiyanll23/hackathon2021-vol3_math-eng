import React from 'react'

import { BtnPrim } from '@/components/atoms/Buttons'
import { TextInput } from '@/components/atoms/TextInput'

import styles from './styles.module.scss'

// ___________
//
const EncForm: React.VFC = () => {
  return (
    <form className={styles.EncForm}>
      <label>
        <span>メッセージ:</span>
        <TextInput type="text" />
      </label>
      <div>
        <BtnPrim type="submit">暗号化</BtnPrim>
      </div>
    </form>
  )
}

export default EncForm
