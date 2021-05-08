import { useRecoilState } from 'recoil'

import { selectedKeyAtom } from './atom'

// __________
//
export const useSelectedKey = () => {
  const [selectedKey, setSelectedKey] = useRecoilState(selectedKeyAtom)

  return {
    selectedKey,
    setSelectedKey,
  }
}
