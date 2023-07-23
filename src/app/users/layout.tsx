'use client'

import { Header } from '@/components/Header/Header'
import { Container } from '@/components/ui-components/Container/Container'
import { Title } from '@/components/ui-components/Title/Title'
import { UIButton } from '@/components/ui-components/UIButton/UIButton'
import { UIText } from '@/components/ui-components/UIText/UIText'
import { USERS_PAGE_HEADER_DESRIPTION } from '@/constants/textConstants'
import { Providers } from '@/store/provider'
import type { Metadata } from 'next'
import { useParams, useRouter, useSearchParams } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Users | List',
  description: 'Список пользователей',
}

export default function UsersLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const params = useParams()

  return (
    <>
      <Header>
        <Container width={1440}>
          <Title text={'Наша команда'}></Title>
          <UIText As={'p'} text={USERS_PAGE_HEADER_DESRIPTION}></UIText>
          <UIButton type={'button'} text={'Выход'} name={'exitButton'} />
          {params.id && <UIButton type={'button'} text={'Назад'} name={'backButton'} />}
        </Container>
      </Header>
      {children}
    </>
  )
}
