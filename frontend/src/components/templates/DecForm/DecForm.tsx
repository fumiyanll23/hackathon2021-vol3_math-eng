import React, { useState } from 'react'

import { OCR } from '@/components/organisms/OCR'
import { TextInput } from '@/components/atoms/TextInput'
import { BtnPrim } from '@/components/atoms/Buttons'
import { DecResult } from '@/components/organisms/DecResult'

import styles from './styles.module.scss'

// ___________
//
type Phase = 'RECOGNIZE' | 'CONFIRM' | 'RESULT'

// ___________
//
const DecForm: React.VFC = () => {
  const [txt, setTxt] = useState('')
  const [phase, setPhase] = useState<Phase>('RECOGNIZE')

  switch (phase) {
    case 'RECOGNIZE':
      return (
        <div className={styles.Recognize}>
          <div className={styles.OCRBody}>
            <OCR setTxt={setTxt} />
            <div className={styles.Txt}>{txt}</div>
          </div>
          <div className={styles.Next}>
            <BtnPrim onClick={() => setPhase('CONFIRM')}>OK</BtnPrim>
          </div>
        </div>
      )
    case 'CONFIRM':
      return (
        <div className={styles.Confirm}>
          <TextInput
            type="text"
            value={txt}
            onChange={(e) => setTxt(e.target.value)}
          />
          <div className={styles.Body}>
            <div>これでよろしいですか？</div>
            <div className={styles.Btns}>
              <BtnPrim onClick={() => setPhase('RECOGNIZE')}>
                キャンセル
              </BtnPrim>
              <BtnPrim onClick={() => setPhase('RESULT')}>OK</BtnPrim>
            </div>
          </div>
        </div>
      )
    default:
      return <DecResult msg={txt} />
  }
}

export default DecForm
