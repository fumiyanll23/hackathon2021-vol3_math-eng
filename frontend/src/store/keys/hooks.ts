import { useCallback } from 'react'
import { useRecoilState } from 'recoil'

import type { Key } from '@/types'
import { useSelectedKey } from '@/store/selectedKey'

import { keyAtom } from './atom'

// __________
//
export const useKeys = () => {
  const [keys, setKeys] = useRecoilState(keyAtom)
  const { selectedKey, setSelectedKey } = useSelectedKey()

  const appendKey = useCallback(
    (k: Omit<Key, 'id'>) => {
      const mx = keys.length > 0 ? Math.max(...keys.map((key) => key.id)) : 0

      setKeys((ks) => {
        const newKey: Key = {
          ...k,
          id: mx + 1,
        }

        return [...ks, newKey]
      })
      setSelectedKey(mx + 1)
    },
    [setKeys, keys, setSelectedKey]
  )

  const removeKey = useCallback(
    (id: number) => {
      setKeys((ks) => ks.filter((k) => k.id !== id))

      const filteredKeys = keys.filter((k) => k.id !== id)
      if (filteredKeys.length && selectedKey === id) {
        setSelectedKey(filteredKeys[0].id)
      }
    },
    [setKeys, keys, setSelectedKey, selectedKey]
  )

  return { keys, appendKey, removeKey }
}
