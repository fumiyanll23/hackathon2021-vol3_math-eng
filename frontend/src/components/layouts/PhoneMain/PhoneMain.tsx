import React, { useEffect } from 'react'

import { useKeys, KEYKEY } from '@/store/key'
import { Nav } from '@/components/templates/Nav'

import styles from './styles.module.scss'

// ___________
//
const PhoneMain: React.FC = ({ children }) => {
  const { setKey } = useKeys()
  useEffect(() => {
    const k = localStorage.getItem(KEYKEY)
    if (k) {
      setKey(JSON.parse(k))
    }
  }, [setKey])

  return (
    <main className={styles.PhoneMain}>
      <div className={styles.inner}>{children}</div>
      <Nav />
    </main>
  )
}

export default PhoneMain
