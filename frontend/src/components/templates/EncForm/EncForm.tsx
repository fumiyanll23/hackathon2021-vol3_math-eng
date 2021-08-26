import React, { useState, useCallback, useRef } from 'react'

import { BtnPrim } from '@/components/atoms/Buttons'
import { TextInput } from '@/components/atoms/TextInput'
import { Modal } from '@/components/templates/Modal'
import { Loading } from '@/components/atoms/Icons'
import { useKeys } from '@/store/key'

import styles from './styles.module.scss'

// ___________
//
const EncForm: React.VFC = () => {
  const [display, setDisplay] = useState(false)
  const [cipherText, setCipherText] = useState('')
  const textRef = useRef<HTMLInputElement>(null)
  const { key } = useKeys()

  const handleSubmit = useCallback(async () => {
    if (textRef.current?.value) {
      setDisplay(true)

      const body = {
        scheme: key.scheme,
        encKey: key.encKey,
        message: textRef.current.value,
      }
      const resBody = await fetch(
        'https://zrfleon9t2.execute-api.ap-northeast-1.amazonaws.com/prod/encryption',
        {
          method: 'POST',
          mode: 'cors',
          body: JSON.stringify(body),
        }
      ).then((res) => res.json())
      if (resBody?.cipherText) {
        setCipherText(resBody.cipherText)
      }
    }
  }, [textRef, setDisplay, key])

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
            <h2 className={styles.CipherText}>{cipherText}</h2>
            <div className={styles.Btn}>
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
        {!cipherText && (
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
