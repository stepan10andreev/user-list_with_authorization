'use client'
import { USERS_PAGE_HEADER_DESRIPTION } from '@/constants/textConstants'
import React, { useEffect, useState } from 'react'
import { Header } from '../Header/Header'
import { UserList } from '../UsersList/UserList'
import { Container } from '../ui-components/Container/Container'
import { Content } from '../ui-components/Content/Content'
import { Title } from '../ui-components/Title/Title'
import { UIButton } from '../ui-components/UIButton/UIButton'
import { UIText } from '../ui-components/UIText/UIText'
import { useAppSelector } from '../Hooks/useApp'
import { NotAuthPage } from './NotAuthPage'
import { useRouter } from 'next/navigation'
import { BeatLoader, BounceLoader } from 'react-spinners'
import styles from '@/components/UsersList/UserList.module.scss'
import { ExitIcon } from '../ui-components/Icons/ExitIcon'


export const UsersListScreen = () => {
  const [isAuth, setIsAuth] = useState<null | boolean>(null);
  const [isLoading, setIsLoading] = useState(true);
  // const isAuth = useAppSelector((state) => state.authorization.isAuth);
  // const isAuth = localStorage.getItem('my-reg-token') ? true : false;

  const router = useRouter();

  useEffect(() => {
    localStorage.getItem('my-reg-token') ? setIsAuth(true) : setIsAuth(false);
    (isAuth != null) && setIsLoading(false);
  }, [isAuth])

  const handleExit = () => {
    localStorage.removeItem('my-reg-token')
    router.push('/')
  }

  return (
    <>
      {isLoading ? (
        <div className={styles.centerSpinner}>
          Loading...
        </div>) : isAuth ? (
          <>
            <Header>
              <Container width={1440}>
                <Title text={'Наша команда'}></Title>
                <UIText As={'p'} text={USERS_PAGE_HEADER_DESRIPTION}></UIText>
                <UIButton type={'button'} text={'Выход'} name={'exitButton'} onClick={handleExit} />
                <UIButton type={'button'} icon={<ExitIcon />} name={'exitIcon'} onClick={handleExit} />
              </Container>
            </Header>
            <Content>
              <Container width={1440}>
                <UserList />
              </Container>
            </Content>
          </>
        ) : (
        <NotAuthPage />
      )}
    </>
  )
}
