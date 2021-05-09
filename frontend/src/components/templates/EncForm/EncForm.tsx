import React, { useState, useCallback, useRef } from 'react'

import { BtnPrim } from '@/components/atoms/Buttons'
import { TextInput } from '@/components/atoms/TextInput'
import { Modal } from '@/components/templates/Modal'
import { Loading } from '@/components/atoms/Icons'

import styles from './styles.module.scss'

// ___________
//
const EncForm: React.VFC = () => {
  const [display, setDisplay] = useState(false)
  const [cipherText, setCipherText] = useState('')
  const textRef = useRef<HTMLInputElement>(null)

  const handleSubmit = useCallback(() => {
    if (textRef.current?.value) {
      setDisplay(true)
    }
  }, [textRef, setDisplay])

  return (
    <>
      <div className={styles.EncForm}>
        <div className={styles.Input}>
          <TextInput type="text" ref={textRef} placeholder="メッセージ" />
        </div>
        <div className={styles.Submit}>
          <BtnPrim type="submit" onClick={handleSubmit}>
            暗号化
          </BtnPrim>
        </div>
      </div>
      <Modal
        display={display}
        handleClose={() => {
          setDisplay(false)
        }}
      >
        {cipherText && (
          <div>
            <h2>{cipherText}</h2>
            <div>
              <BtnPrim
                onClick={() => {
                  setDisplay(false)
                  setCipherText('')
                }}
              >
                閉じる
              </BtnPrim>
            </div>
          </div>
        )}
        {cipherText || (
          <div className={styles.Loading}>
            <Loading />
            <div>暗号化しています...</div>
          </div>
        )}
      </Modal>
    </>
  )
}

export default EncForm
