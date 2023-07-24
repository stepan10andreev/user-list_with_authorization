'use client'
import React, { FC } from 'react'
import { Header } from '../Header/Header'
import { Container } from '../ui-components/Container/Container'
import { Content } from '../ui-components/Content/Content'
import { UIButton } from '../ui-components/UIButton/UIButton'
import { NotAuthPage } from './NotAuthPage'
import { UserInfo } from '../Header/UserInfo/UserInfo'
import { UserInfoContent } from '../UserInfoContent/UserInfoContent'
import { IUsersData } from '@/services/users.service'
import { useRouter } from 'next/navigation'
import { ExitIcon } from '../ui-components/Icons/ExitIcon'
import { GoBackIcon } from '../ui-components/Icons/GoBackIcon'

interface IUserScreen {
  userData: IUsersData
}

export const UserScreen: FC<IUserScreen> = ({ userData }) => {
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
              <UIButton type={'button'} text={'Выход'} name={'exitButton'} onClick={handleExit} />
              <UIButton type={'button'} icon={<ExitIcon />} name={'exitIcon'} onClick={handleExit} />

              <UIButton type={'button'} text={'Назад'} name={'backButton'} onClick={() => router.back()} />
              <UIButton type={'button'} icon={<GoBackIcon />} name={'goBackIcon'} onClick={handleExit} />

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
