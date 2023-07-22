'use client'
import React, { ChangeEventHandler, FormEventHandler, useState } from 'react'
import styles from './RegistrationForm.module.scss'
import { UIInput } from '../ui-components/UIInput/UIInput'
import { UIButton } from '../ui-components/UIButton/UIButton'
import { isMaxLength } from '@/utils/isMaxLength'
import { USERNAME_MAX_LENGTH } from '@/constants/registrationFormConstants'
import { ErrorText } from '../ui-components/ErrorText/ErrorText'
import { inputOnlyText } from '@/utils/inputOnlyText'

export const RegistrationForm = () => {

  const [invalidMaxLength, setInvalidMaxLength] = useState(false);

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    console.log('here')
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const currentTarget = event.target;
    switch (currentTarget.name) {
      case 'username':
        currentTarget.value = inputOnlyText(currentTarget.value);
        isMaxLength(currentTarget.value, USERNAME_MAX_LENGTH) ? setInvalidMaxLength(false) : setInvalidMaxLength(true);
        break;
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>

      <h2 className={styles.title}>Регистрация</h2>

      <UIInput
        type={'text'}
        heading={'Имя'}
        placeholderText={'Имя'}
        name={'username'}
        onChange={handleChange}
        error={invalidMaxLength}
        errorText={`Максимальная длина поля - ${USERNAME_MAX_LENGTH} символов`}
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
