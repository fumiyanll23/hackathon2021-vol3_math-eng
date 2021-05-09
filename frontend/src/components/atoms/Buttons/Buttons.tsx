/* eslint-disable react/button-has-type */
import React from 'react'

import cls from 'classnames'

import styles from './styles.module.scss'

// ___________
//
type ButtonsProps = React.ButtonHTMLAttributes<HTMLButtonElement>

// ___________
//
export const BtnPrim: React.VFC<ButtonsProps> = ({ type, ...props }) => {
  return (
    <button
      className={cls(styles.Button, styles.Prim)}
      type={type || 'button'}
      {...props}
    />
  )
}
