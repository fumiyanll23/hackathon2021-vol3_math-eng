import React from 'react'

import { BtnPrim } from '@/components/atoms/Buttons'

import styles from './styles.module.scss'

// ___________
//
const KeyAddBtns: React.VFC = () => {
  return (
    <div>
      <BtnPrim>リクエスト</BtnPrim>
      <BtnPrim>自作する</BtnPrim>
    </div>
  )
}

export default KeyAddBtns
