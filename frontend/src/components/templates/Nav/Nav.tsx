import React from 'react'
import Link from 'next/link'

import styles from './styles.module.scss'

// ___________
//
type Path = {
  url: string
  title: string
}
const paths: Path[] = [
  { url: '/encryption', title: '暗号化' },
  { url: '/decryption', title: '復号' },
  { url: '/keys', title: '鍵' },
]

// ___________
//
const Nav: React.VFC = () => {
  return (
    <nav className={styles.Nav}>
      {paths.map((path) => (
        <Link key={path.title} href={path.url}>
          <a>{path.title}</a>
        </Link>
      ))}
    </nav>
  )
}

export default Nav
