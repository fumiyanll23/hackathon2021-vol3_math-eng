import { useRecoilState } from 'recoil'

import { keyAtom } from './atom'

// __________
//
export const useKeys = () => {
  const [key, setKey] = useRecoilState(keyAtom)

  return { key, setKey }
}
