import { useCallback } from 'react'
import { useRecoilState } from 'recoil'

import type { Key } from '@/types'
import { keyAtom } from './atom'

// __________
//
export const useKeys = () => {
  const [keys, setKeys] = useRecoilState(keyAtom)

  const appendKey = useCallback(
    (k: Omit<Key, 'id'>) => {
      setKeys((ks) => {
        const mx = ks.length > 0 ? Math.max(...ks.map((key) => key.id)) : 0
        const newKey: Key = {
          ...k,
          id: mx + 1,
        }

        return [...ks, newKey]
      })
    },
    [setKeys]
  )

  const removeKey = useCallback(
    (id: number) => {
      setKeys((ks) => ks.filter((k) => k.id !== id))
    },
    [setKeys]
  )

  return { keys, appendKey, removeKey }
}
