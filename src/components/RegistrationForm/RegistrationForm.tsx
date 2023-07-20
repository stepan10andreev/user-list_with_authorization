'use client'
import React, { FormEventHandler } from 'react'
import styles from './RegistrationForm.module.scss'
import { UIInput } from '../ui-components/UIInput/UIInput'
import { UIButton } from '../ui-components/UIButton/UIButton'

export const RegistrationForm = () => {
  const handleSubmit: FormEventHandler = (event) => {
    console.log('here')
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>

      <h2 className={styles.title}>Регистрация</h2>

      <UIInput
        type={'text'}
        heading={'Имя'}
        placeholderText={'Имя'}
        name={'username'}
      />

      <UIInput
        type={'email'}
        heading={'Электронная почта'}
        placeholderText={'example@mail.ru'}
        name={'email'}
      />

      <UIInput
        type={'password'}
        heading={'Пароль'}
        placeholderText={'Введите пароль'}
        name={'password'}
      />

      <UIInput
        type={'password'}
        heading={'Подтвердите пароль'}
        placeholderText={'Повторите пароль'}
        name={'repassword'}
      />

      <UIButton
        text={'Зарегистрироваться'}
      />
    </form>
  )
}
