import { atom } from 'recoil'

import type { Key } from '@/types'

// __________
//
const mockKeys: Key[] = [
  {
    id: 1,
    scheme: 'RSA',
    enc: '1234',
    dec: '5678',
  },
  {
    id: 2,
    scheme: 'RSA',
    enc: '1234',
    dec: '5678',
  },
  {
    id: 3,
    scheme: 'RSA',
    enc: '1234',
    dec: '5678',
  },
]

export const keyAtom = atom<Key[]>({
  key: 'keys',
  default: mockKeys,
})
