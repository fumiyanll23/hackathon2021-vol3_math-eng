import React from 'react'

import { Key } from '@/components/atoms/Icons'
import { useKeys } from '@/store/key'

import styles from './styles.module.scss'

// ___________
//
const KeyView: React.VFC = () => {
  const { key } = useKeys()

  return (
    <div className={styles.KeyView}>
      <div className={styles.KeyIcon}>
        <Key strokeWidth={1} />
      </div>
      <div className={styles.Body}>
        <h2 className={styles.Scheme}>{key.scheme.toUpperCase()}</h2>
        <div>
          <div className={styles.Row}>
            <span className={styles.Label}>暗号化鍵:</span>
            <span>{key.encKey}</span>
          </div>
          <div className={styles.Row}>
            <span className={styles.Label}>復号鍵:</span>
            <span>{key.decKey}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KeyView
