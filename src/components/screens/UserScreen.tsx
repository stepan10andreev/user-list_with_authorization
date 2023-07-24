'use client'
import { USERS_PAGE_HEADER_DESRIPTION } from '@/constants/textConstants'
import React, { FC } from 'react'
import { Header } from '../Header/Header'
import { UserList } from '../UsersList/UserList'
import { Container } from '../ui-components/Container/Container'
import { Content } from '../ui-components/Content/Content'
import { Title } from '../ui-components/Title/Title'
import { UIButton } from '../ui-components/UIButton/UIButton'
import { UIText } from '../ui-components/UIText/UIText'
import { NotAuthPage } from './NotAuthPage'
import { UserInfo } from '../Header/UserInfo/UserInfo'
import { UserInfoContent } from '../UserInfoContent/UserInfoContent'
import { useAppSelector } from '../Hooks/useApp'
import { IUsersData } from '@/services/users.service'
import { useRouter } from 'next/navigation'

interface IUserScreen {
  userData: IUsersData
}

export const UserScreen: FC<IUserScreen> = ({userData}) => {
  // const isAuth = useAppSelector((state) => state.authorization.isAuth);
  const isAuth = localStorage.getItem('my-reg-token') ? true : false;

  const router = useRouter();

  const handleExit = () => {
    localStorage.removeItem('my-reg-token')
    router.push('/')
  }

  return (
    <>
    {isAuth ? (
      <>
        <Header>
        <Container width={1440}>
          <UserInfo
            avatar={userData.avatar}
            first_name={userData.first_name}
            last_name={userData.last_name}
            id={userData.id}
          />
          <UIButton type={'button'} text={'Выход'} name={'exitButton'} onClick={handleExit}/>
          <UIButton type={'button'} text={'Назад'} name={'backButton'} onClick={() => router.back()}/>
        </Container>
      </Header>
      <Content>
        <Container width={1440}>
          <UserInfoContent email={userData.email} id={userData.id} />
        </Container>
      </Content>
    </>
    ) : (
      <NotAuthPage />
    )}
  </>
  )
}
