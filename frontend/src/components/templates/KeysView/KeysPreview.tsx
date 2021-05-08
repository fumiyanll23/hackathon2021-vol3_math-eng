import React from 'react'

import { useKeys } from '@/store/keys'
import { useSelectedKey } from '@/store/selectedKey'

import { KeyItem } from './KeyItem'
import styles from './styles.module.scss'

// ___________
//
const KeysView: React.VFC = () => {
  const { keys, removeKey } = useKeys()
  const { selectedKey } = useSelectedKey()
  console.log({ selectedKey })

  return (
    <div className={styles.KeysView}>
      {keys.map((key) => (
        <KeyItem
          key={key.id}
          data={key}
          handleDelete={() => removeKey(key.id)}
          selected={key.id === selectedKey}
        />
      ))}
    </div>
  )
}

export default KeysView
