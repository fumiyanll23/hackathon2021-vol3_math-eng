import React, { useCallback, useRef } from 'react'

import { TextInput } from '@/components/atoms/TextInput'
import { BtnPrim } from '@/components/atoms/Buttons'
import { useKeys } from '@/store/key'
import type { Scheme } from '@/types'

import styles from './styles.module.scss'

// ___________
//
interface KeyGenFormProps {
  handleClose: () => void
}

const schemes: Scheme[] = ['RSA']

// ___________
//
const KeyGenForm: React.VFC<KeyGenFormProps> = ({ handleClose }) => {
  const schemeRef = useRef<HTMLSelectElement>(null)
  const encKeyRef = useRef<HTMLInputElement>(null)
  const decKeyRef = useRef<HTMLInputElement>(null)
  const { setKey } = useKeys()

  const handleSubmit = useCallback(() => {
    const scheme = schemeRef.current?.value || ''
    const encKey = encKeyRef.current?.value || ''
    const decKey = decKeyRef.current?.value || ''
    if (scheme && encKey && decKey) {
      setKey({ scheme: scheme as Scheme, encKey, decKey })
      if (schemeRef.current) {
        schemeRef.current.value = ''
      }
      if (encKeyRef.current) {
        encKeyRef.current.value = ''
      }
      if (decKeyRef.current) {
        decKeyRef.current.value = ''
      }
      handleClose()
    }
  }, [schemeRef, encKeyRef, decKeyRef, setKey, handleClose])

  return (
    <form className={styles.KeyGenForm}>
      <h2 className={styles.Title}>鍵の作成</h2>
      <div className={styles.Row}>
        <label>
          <span className={styles.Label}>鍵の種類</span>
          <select className={styles.Select} ref={schemeRef}>
            {schemes.map((scheme) => (
              <option key={scheme} value={scheme}>
                {scheme}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className={styles.Row}>
        <label>
          <span className={styles.Label}>暗号化鍵</span>
          <TextInput ref={encKeyRef} type="text" />
        </label>
      </div>
      <div className={styles.Row}>
        <label>
          <span className={styles.Label}>復号鍵</span>
          <TextInput ref={decKeyRef} type="text" />
        </label>
      </div>
      <div className={styles.Btn}>
        <BtnPrim onClick={handleSubmit}>作成</BtnPrim>
      </div>
    </form>
  )
}

export default KeyGenForm
