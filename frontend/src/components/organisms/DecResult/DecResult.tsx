import React from 'react'

import { Loading } from '@/components/atoms/Icons'

import styles from './styles.module.scss'

// ___________
//
interface DecResultProps {
  msg: string
}

// ___________
//
const DecResult: React.VFC<DecResultProps> = ({ msg }) => {
  return (
    <div className={styles.DecResult}>
      <div className={styles.Loading}>
        <Loading />
        <div>復号中...</div>
      </div>
    </div>
  )
}

export default DecResult
