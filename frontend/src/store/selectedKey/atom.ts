import { atom } from 'recoil'

// _________
//
export const selectedKeyAtom = atom<number>({
  key: 'selectedKey',
  default: 0,
})
