import React from 'react'

import { useKeys } from '@/store/key'

import styles from './styles.module.scss'

// ___________
//
const KeyView: React.VFC = () => {
  const { key } = useKeys()

  return (
    <div>
      <h2>{key.scheme}</h2>
      <div>
        <div>
          暗号化鍵
          <span>{key.enc}</span>
        </div>
        <div>
          復号鍵
          <span>{key.dec}</span>
        </div>
      </div>
    </div>
  )
}

export default KeyView
