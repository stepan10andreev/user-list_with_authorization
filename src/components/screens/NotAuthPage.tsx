import React from 'react'
import { Header } from '../Header/Header'
import { useRouter } from 'next/navigation'
import { Container } from '../ui-components/Container/Container'
import { Title } from '../ui-components/Title/Title'
import { UIButton } from '../ui-components/UIButton/UIButton'
import { UIText } from '../ui-components/UIText/UIText'

export const NotAuthPage = () => {
  const router = useRouter();

  return (
    <Header>
      <Container width={1440}>
        <Title text={'Наша команда'}></Title>
        <UIText As={'p'} text={'Cтраница доступна только зарегистрированным пользователям'}></UIText>
        <UIButton type={'button'} text={'Назад'} name={'backButton'} onClick={() => router.push('/')} />
      </Container>
    </Header>
  )
}
