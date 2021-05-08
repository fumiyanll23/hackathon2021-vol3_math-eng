import React from 'react'

import styles from './styles.module.scss'

// ___________
//
const PhoneMain: React.FC = ({ children }) => {
  return (
    <main className={styles.PhoneMain}>
      <div className={styles.inner}>{children}</div>
    </main>
  )
}

export default PhoneMain
