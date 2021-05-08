import React, { useState } from 'react'

import { OCR } from '@/components/organisms/OCR'
import { TextInput } from '@/components/atoms/TextInput'

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
        <div>
          <div>
            <OCR setTxt={setTxt} />
          </div>
          <div>{txt}</div>
          <button type="button" onClick={() => setPhase('CONFIRM')}>
            OK
          </button>
        </div>
      )
    case 'CONFIRM':
      return (
        <div>
          <TextInput
            type="text"
            value={txt}
            onChange={(e) => setTxt(e.target.value)}
          />
          <div>
            <div>これでよろしいですか？</div>
            <button type="button" onClick={() => setPhase('RESULT')}>
              OK
            </button>
          </div>
        </div>
      )
    default:
      return <div>result</div>
  }
}

export default DecForm
