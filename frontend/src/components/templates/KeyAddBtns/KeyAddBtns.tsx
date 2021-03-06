import React, { useCallback, useState } from 'react'

import { BtnPrim } from '@/components/atoms/Buttons'
import { KeyGenForm } from '@/components/templates/KeyGenForm'
import { Modal } from '@/components/templates/Modal'
import { Loading } from '@/components/atoms/Icons'
import { useKeys } from '@/store/key'
import type { Key } from '@/types'

import styles from './styles.module.scss'

// ___________
//
const KeyAddBtns: React.VFC = () => {
  const [display, setDisplay] = useState(false)
  const [pending, setPending] = useState(false)
  const { setKey, saveKey } = useKeys()

  const handleRequest = useCallback(async () => {
    setPending(true)

    const key: Key = await fetch(
      'https://zrfleon9t2.execute-api.ap-northeast-1.amazonaws.com/prod/key_gen?scheme=rsa',
      { mode: 'cors' }
    ).then((res) => res.json())

    if (key) {
      setKey(key)
      saveKey(key)
    }
    setPending(false)
  }, [setPending, setKey, saveKey])

  return (
    <>
      <div className={styles.KeyAddBtns}>
        <div className={styles.RequestBtn}>
          <BtnPrim onClick={handleRequest}>
            {pending && <Loading />}
            リクエスト
          </BtnPrim>
        </div>
        <div>
          <BtnPrim onClick={() => setDisplay(true)}>自作する</BtnPrim>
        </div>
      </div>
      <Modal display={display} handleClose={() => setDisplay(false)}>
        <KeyGenForm handleClose={() => setDisplay(false)} />
      </Modal>
    </>
  )
}

export default KeyAddBtns
