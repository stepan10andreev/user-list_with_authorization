'use client'
import React, { ChangeEventHandler, FocusEventHandler, FormEventHandler, useEffect, useState } from 'react'
import styles from './RegistrationForm.module.scss'
import { UIInput } from '../ui-components/UIInput/UIInput'
import { UIButton } from '../ui-components/UIButton/UIButton'
import { isMaxLength } from '@/utils/isMaxLength'
import { HAS_EMPTY_INPUT_MESSAGE, INVALID_EMAIL_MESSAGE, INVALID_MAXLENGTH_MESSAGE, INVALID_PASSWORD_MESSAGE, PASSWORD_MISSMATCH_MESSAGE, USERNAME_MAX_LENGTH } from '@/constants/registrationFormConstants'
import { inputOnlyText } from '@/utils/inputOnlyText'
import { isValidEmail } from '@/utils/isValidEmail'
import { isValidPassword } from '@/utils/isValidPassword'
import { PasswordInput } from '../ui-components/PasswordInput/PasswordInput'
import { FormService } from '@/services/registration.service'
import { IRegistrationFormData } from './registrationForm.interface'
import { ErrorText } from '../ui-components/ErrorText/ErrorText'
import { isFoundEmptyInput } from '@/utils/isEmptyInput'

export const RegistrationForm = () => {
  const [isEmptyValue, setIsValue] = useState(false);
  const [invalidMaxLength, setInvalidMaxLength] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [isMatchedPasswords, setIsMatchedPasswords] = useState(true);
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');

  useEffect(() => {
    password === repassword && setIsMatchedPasswords(true)
  }, [password, repassword])

  const handleSubmit: FormEventHandler = async (event) => {
    event.preventDefault();

    const FORM = event.currentTarget as HTMLFormElement;
    const formData = new FormData(FORM) as unknown as Iterable<[IRegistrationFormData, FormDataEntryValue]>;
    const FORM_DATA: IRegistrationFormData = Object.fromEntries(formData);

    isFoundEmptyInput(Object.values(FORM_DATA)) ? setIsValue(true) : setIsValue(false);

    FORM_DATA.password === FORM_DATA.repassword ? setIsMatchedPasswords(true) : setIsMatchedPasswords(false)

    // условия  if - валидировать непосредственно знаечния из FORM_DATA (так надежнее)
    // некоторые прееменные, например isMatchedPasswords останется true даже после выполнения setIsMatchedPasswords(false) из условия выше при несовпадении паролей
    // и поменяется только при следующем событии Submit
    // если использовать его в условии ниже то будет некоректное дейтсвие
    // также и с другими можно использовать переменные из состояния, но лучше валиация непосредственно знаечний из FORM_DATA
    const ALL_INPUTS_IS_VALID = !isFoundEmptyInput(Object.values(FORM_DATA)) &&
      isMaxLength(FORM_DATA.username, USERNAME_MAX_LENGTH) &&
      isValidEmail(FORM_DATA.email) &&
      isValidPassword(FORM_DATA.password) &&
      FORM_DATA.password === FORM_DATA.repassword

    if (!ALL_INPUTS_IS_VALID) return;

    const { username, repassword, ...userData } = FORM_DATA;

    const data = await FormService.register(userData)
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
        setPassword(currentTarget.value)
        password === repassword && setIsMatchedPasswords(true)
        break;

      case 'repassword':
        setRepassword(currentTarget.value)
        password === repassword && setIsMatchedPasswords(true)
        break;
    }
  }

  const handleBlur: FocusEventHandler<HTMLInputElement> = (event) => {
    const currentTarget = event.target;

    switch (currentTarget.name) {
      case 'email':
        (currentTarget.value.length > 0) && (isValidEmail(currentTarget.value) ? setInvalidEmail(false) : setInvalidEmail(true))

        break;
      case 'password':
        (currentTarget.value.length > 0) && (isValidPassword(currentTarget.value) ? setInvalidPassword(false) : setInvalidPassword(true))

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
        value={password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={invalidPassword}
        errorText={INVALID_PASSWORD_MESSAGE}
      />

      <PasswordInput
        heading={'Подтвердите пароль'}
        name={'repassword'}
        placeholderText={'Повторите пароль'}
        value={repassword}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      {!isMatchedPasswords && (<ErrorText errorText={PASSWORD_MISSMATCH_MESSAGE} />)}

      <UIButton
        type={'submit'}
        text={'Зарегистрироваться'}
      />

      {isEmptyValue && (<ErrorText errorText={HAS_EMPTY_INPUT_MESSAGE} />)}
    </form>
  )
}
