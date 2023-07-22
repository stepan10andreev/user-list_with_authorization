'use client'
import React, { ChangeEventHandler, FocusEventHandler, FormEventHandler, useState } from 'react'
import styles from './RegistrationForm.module.scss'
import { UIInput } from '../ui-components/UIInput/UIInput'
import { UIButton } from '../ui-components/UIButton/UIButton'
import { isMaxLength } from '@/utils/isMaxLength'
import { INVALID_EMAIL_MESSAGE, INVALID_MAXLENGTH_MESSAGE, INVALID_PASSWORD_MESSAGE, USERNAME_MAX_LENGTH } from '@/constants/registrationFormConstants'
import { inputOnlyText } from '@/utils/inputOnlyText'
import { isValidEmail } from '@/utils/isValidEmail'
import { isValidPassword } from '@/utils/isValidPassword'
import { PasswordInput } from '../ui-components/PasswordInput/PasswordInput'
import { FormService } from '@/services/registration.service'

export const RegistrationForm = () => {

  const [invalidMaxLength, setInvalidMaxLength] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);

  const handleSubmit: FormEventHandler = async (event) => {
    event.preventDefault();
    console.log('Send')
    const data = await FormService.register()
    console.log(data)

  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const currentTarget = event.target;

    switch (currentTarget.name) {
      case 'username':
        currentTarget.value = inputOnlyText(currentTarget.value);
        isMaxLength(currentTarget.value, USERNAME_MAX_LENGTH) ? setInvalidMaxLength(false) : setInvalidMaxLength(true);

        break;
      case 'email':
        isValidEmail(currentTarget.value) && setInvalidEmail(false)

        break;

      case 'password':
        isValidPassword(currentTarget.value) && setInvalidPassword(false)

        break;
    }
  }

  const handleBlur: FocusEventHandler<HTMLInputElement> = (event) => {
    const currentTarget = event.target;

    switch (currentTarget.name) {
      case 'email':
        isValidEmail(currentTarget.value) ? setInvalidEmail(false) : setInvalidEmail(true)

        break;
      case 'password':
        isValidPassword(currentTarget.value) ? setInvalidPassword(false) : setInvalidPassword(true)

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
        errorText={INVALID_MAXLENGTH_MESSAGE}
      />

      <UIInput
        type={'email'}
        heading={'Электронная почта'}
        placeholderText={'example@mail.ru'}
        name={'email'}
        onChange={handleChange}
        onBlur={handleBlur}
        error={invalidEmail}
        errorText={INVALID_EMAIL_MESSAGE}
      />

      <PasswordInput
        heading={'Пароль'}
        name={'password'}
        placeholderText={'Введите пароль'}
        onChange={handleChange}
        onBlur={handleBlur}
        error={invalidPassword}
        errorText={INVALID_PASSWORD_MESSAGE}
      />

      <PasswordInput
        heading={'Подтвердите пароль'}
        name={'repassword'}
        placeholderText={'Повторите пароль'}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <UIButton
        text={'Зарегистрироваться'}
      />

    </form>
  )
}
