import React, { useState, useEffect } from 'react'

import { useKeys } from '@/store/key'
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
  const [plainTxt, setPlainTxt] = useState('')
  const [pending, setPending] = useState<null | boolean>(null)
  const { key } = useKeys()

  useEffect(() => {
    if (msg && pending === null) {
      setPending(true)

      const body = {
        scheme: key.scheme,
        decKey: key.decKey,
        cipherText: msg,
      }

      fetch(
        'https://zrfleon9t2.execute-api.ap-northeast-1.amazonaws.com/prod/decryption',
        { method: 'POST', mode: 'cors', body: JSON.stringify(body) }
      )
        .then((res) => res.json())
        .then((resBody) => {
          if (resBody?.message) {
            setPlainTxt(resBody.message)
          }
          setPending(false)
        })
    }
  }, [msg, plainTxt, pending, setPlainTxt, setPending, key])

  return (
    <div className={styles.DecResult}>
      {plainTxt && pending === false ? (
        <div className={styles.Plaintext}>{plainTxt}</div>
      ) : (
        <div className={styles.Loading}>
          <Loading />
          <div>復号中...</div>
        </div>
      )}
    </div>
  )
}

export default DecResult
