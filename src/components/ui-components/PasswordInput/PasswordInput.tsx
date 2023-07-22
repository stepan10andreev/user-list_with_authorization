import React, { FC, MouseEventHandler, useState } from 'react'
import { IUIInputProps, UIInput } from '../UIInput/UIInput'
import { HiddingButtom } from '../HiddingButton/HiddingButtom'
import styles from '../UIInput/UIInput.module.scss'
import { ErrorText } from '../ErrorText/ErrorText'

interface IPasswordInputProps extends Omit<IUIInputProps, 'type'> {}

export const PasswordInput: FC<IPasswordInputProps> = ({ heading, placeholderText, name, As = 'h2', onChange, onBlur, value, error, errorText }) => {
  const [isVisible, setIsVisible] = useState(false);


  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    setIsVisible(!isVisible)
  }

  return (
    <label className={styles.label}>
      {As != null && <As className={styles.title}>{heading}</As>}

      <div className={styles.passwordWrapper}>
        <input
          type={isVisible ? 'text' : 'password'}
          name={name}
          placeholder={placeholderText}
          className={styles.input}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        />

        <HiddingButtom onClick={handleClick} isVisible={isVisible}/>
      </div>

      {error && (<ErrorText errorText={errorText as string}/>)}

    </label>
  )
}
