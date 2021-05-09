import { atom } from 'recoil'

import type { Key } from '@/types'

// __________
//
export const KEYKEY = 'KEY'

export const keyAtom = atom<Key>({
  key: 'key',
  default: {
    scheme: 'RSA',
    encKey: '',
    decKey: '',
  },
})
