'use client'
import React, { FC, useEffect, useState } from 'react'
import styles from './UserList.module.scss'
import { UserCard } from '../UserCard/UserCard'
import useSWR from 'swr';
import { UsersService } from '@/services/users.service';
import { ArrowIcon } from '../ui-components/Icons/ArrowIcon';
import { UIButton } from '../ui-components/UIButton/UIButton';
import { SomeUsers } from './SomeUsers';
import { BounceLoader, PulseLoader } from 'react-spinners';
import { useAppSelector } from '../Hooks/useApp';
import { UIText } from '../ui-components/UIText/UIText';

export const UserList = () => {
  const [count, setCount] = useState(1);

  const isUsersOver = useAppSelector((state) => state.usersState.usersIsOver);
  const isLoading = useAppSelector((state) => state.usersState.isLoadingData);

  const USERS = [];

  for (let i = 1; i <= count; i++) {
    USERS.push(<SomeUsers index={i} key={i} />)
  }
  console.log(USERS)
  return (
    <>

      {/* {USERS.length === 0 && <div>111111</div>} */}
      <ul className={styles.list}>
        {USERS}
      </ul>

      {(!isLoading && isUsersOver) ? (
        <div className={styles.usersIsOver}>
          <UIText text='Пользователей больше нет' />
        </div>
      ) : (!isLoading && !isUsersOver) ? (
        <UIButton
          name={'moreButton'}
          text={'Показать еще'}
          icon={<ArrowIcon />}
          onClick={() => setCount(count + 1)}
        />
      ) : null}
    </>
  )
}
