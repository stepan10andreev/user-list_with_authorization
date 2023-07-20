import React, { FC } from 'react'
import clsx from 'clsx';
import styles from './UIButton.module.scss'

interface IUIButton {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  name?: string;
  onClick?: () => void;
  icon?: React.JSX.Element
}

export const UIButton: FC<IUIButton> = ({ text, type, name, onClick, icon }) => {
  return (
    <button
      className={clsx(styles.button, {
        [styles.register]: text === 'Зарегистрироваться',
        [styles.exit]: text === 'Выход' || 'Назад',
        [styles.more]: text === 'Показать еще',
      })}
      type={type}
      name={name}
      onClick={onClick}
    >
      {text}
      {icon}
  </button>
  )
}
