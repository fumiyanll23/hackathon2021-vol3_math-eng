import React from 'react'

import { useKeys } from '@/store/keys'

import { KeyItem } from './KeyItem'
import styles from './styles.module.scss'

// ___________
//
const KeysView: React.VFC = () => {
  const { keys, removeKey } = useKeys()

  return (
    <div className={styles.KeysView}>
      {keys.map((key) => (
        <KeyItem
          key={key.id}
          data={key}
          handleDelete={() => removeKey(key.id)}
        />
      ))}
    </div>
  )
}

export default KeysView
