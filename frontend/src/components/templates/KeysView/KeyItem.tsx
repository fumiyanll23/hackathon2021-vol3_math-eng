import React from 'react'

import type { Key } from '@/types'

import styles from './styles.module.scss'

// ___________
//
export type KeyItemProps = {
  data: Key
  handleDelete: () => void
}

// ___________
//
export const KeyItem: React.VFC<KeyItemProps> = ({ data }) => {
  return (
    <div key={data.id} className={styles.KeyItem}>
      <div className={styles.Name}>
        {data.scheme}
        {data.id}
      </div>
      <div className={styles.Key}>暗号化鍵: {data.enc}</div>
      <div className={styles.Key}>復号鍵: {data.dec}</div>
    </div>
  )
}
