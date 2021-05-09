import { atom } from 'recoil'

import type { Key } from '@/types'

// __________
//
const mockKey: Key = {
  scheme: 'RSA',
  encKey: '1234',
  decKey: '5678',
}

export const keyAtom = atom<Key>({
  key: 'key',
  default: mockKey,
})
