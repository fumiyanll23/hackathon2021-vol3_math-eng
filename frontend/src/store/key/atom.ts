import { atom } from 'recoil'

import type { Key } from '@/types'

// __________
//
const mockKey: Key = {
  scheme: 'RSA',
  enc: '1234',
  dec: '5678',
}

export const keyAtom = atom<Key>({
  key: 'key',
  default: mockKey,
})
