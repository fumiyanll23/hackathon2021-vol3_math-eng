import React from 'react'
import Head from 'next/head'

import styles from './styles.module.scss'

// ___________
//
interface PageTitleProps {
  apply: boolean
  title: string
}

// ___________
//
const PageTitle: React.FC<PageTitleProps> = ({ apply, title }) => {
  return (
    <>
      {apply && (
        <Head>
          <title>{title}</title>
        </Head>
      )}
      <h1 className={styles.PageTitle}>{title}</h1>
    </>
  )
}

export default PageTitle
