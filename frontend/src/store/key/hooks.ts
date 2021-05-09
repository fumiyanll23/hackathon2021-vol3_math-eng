import { useCallback } from 'react'
import { useRecoilState } from 'recoil'

import { Key } from '@/types'
import { keyAtom, KEYKEY } from './atom'

// __________
//
export const useKeys = () => {
  const [key, setKey] = useRecoilState(keyAtom)

  const saveKey = useCallback((k: Key) => {
    localStorage.setItem(KEYKEY, JSON.stringify(k))
  }, [])

  return { key, setKey, saveKey }
}
