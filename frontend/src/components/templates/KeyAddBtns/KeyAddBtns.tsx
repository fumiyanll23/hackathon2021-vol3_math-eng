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
  const { setKey } = useKeys()

  const handleRequest = useCallback(async () => {
    setPending(true)

    const key: Key = await fetch(
      'https://o029oneow3.execute-api.ap-northeast-1.amazonaws.com/dev/key-gen?scheme=rsa',
      { mode: 'cors' }
    ).then((res) => res.json())

    if (key) {
      setKey(key)
    }
    setPending(false)
  }, [setPending, setKey])

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
