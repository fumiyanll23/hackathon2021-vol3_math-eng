import React, { useCallback } from 'react'
import { atom, useRecoilState } from 'recoil'

import styles from './styles.module.scss'

// ___________
//
const countAtom = atom<number>({
  key: 'count',
  default: 0,
})

// ___________
//
const Counter: React.VFC = () => {
  const [count, setCount] = useRecoilState(countAtom)

  const increment = useCallback(() => {
    setCount((cnt) => cnt + 1)
  }, [setCount])

  return (
    <div className={styles.Counter}>
      <button type="button" onClick={increment}>
        Count
      </button>
      <div>
        Num: <span>{count}</span>
      </div>
    </div>
  )
}

export default Counter
