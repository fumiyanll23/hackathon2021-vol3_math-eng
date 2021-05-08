import React from 'react'

import type { Key } from '@/types'
import { KeyItem } from './KeyItem'

import styles from './styles.module.scss'

// ___________
//
const mockKeys: Key[] = [
  {
    id: 1,
    scheme: 'RSA',
    enc: 1234,
    dec: 5678,
  },
  {
    id: 2,
    scheme: 'RSA',
    enc: 1234,
    dec: 5678,
  },
  {
    id: 3,
    scheme: 'RSA',
    enc: 1234,
    dec: 5678,
  },
]

// ___________
//
const KeysView: React.VFC = () => {
  return (
    <div className={styles.KeysView}>
      {mockKeys.map((key) => (
        <KeyItem
          key={key.id}
          data={key}
          handleDelete={() => {
            return ''
          }}
        />
      ))}
    </div>
  )
}

export default KeysView
