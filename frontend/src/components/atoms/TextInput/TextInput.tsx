import React from 'react'

import styles from './styles.module.scss'

// ___________
//
type TextInputProps = React.InputHTMLAttributes<HTMLInputElement>

// ___________
//
const TextInput = React.forwardRef(
  (props: TextInputProps, ref: React.LegacyRef<HTMLInputElement>) => {
    return <input className={styles.TextInput} {...props} ref={ref} />
  }
)

export default TextInput
