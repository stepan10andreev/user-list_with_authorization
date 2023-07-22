import React, { ChangeEventHandler, FC, FocusEventHandler } from 'react'
import styles from './UIInput.module.scss'
import { ErrorText } from '../ErrorText/ErrorText';

export interface IUIInputProps {
  type: string;
  heading?: string;
  placeholderText?: string;
  name: string;
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'div' | null;
  onChange?: ChangeEventHandler;
  onBlur?: FocusEventHandler;
  value?: string;
  error?: boolean;
  errorText?: string;
}

export const UIInput: FC<IUIInputProps> = ({ type, heading, placeholderText, name, As ='h2', onChange, onBlur, value, error, errorText }) => {
  return (
    <label className={styles.label}>
      {As != null && <As className={styles.title}>{heading}</As>}

      <input
        type={type}
        name={name}
        placeholder={placeholderText}
        value={value}
        className={styles.input}
        onChange={onChange}
        onBlur={onBlur}
      />

      {error && (<ErrorText errorText={errorText as string}/>)}
    </label>
  )
}
