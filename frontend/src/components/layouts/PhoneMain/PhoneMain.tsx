import React from 'react'

import { Nav } from '@/components/templates/Nav'

import styles from './styles.module.scss'

// ___________
//
const PhoneMain: React.FC = ({ children }) => {
  return (
    <main className={styles.PhoneMain}>
      <div className={styles.inner}>{children}</div>
      <Nav />
    </main>
  )
}

export default PhoneMain
