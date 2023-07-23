'use client'
import React, { FC, useState } from 'react'
import styles from './UserList.module.scss'
import { UserCard } from '../UserCard/UserCard'
import useSWR from 'swr';
import { UsersService } from '@/services/users.service';
import { ArrowIcon } from '../ui-components/Icons/ArrowIcon';
import { UIButton } from '../ui-components/UIButton/UIButton';
import { SomeUsers } from './SomeUsers';

export const UserList = () => {
  const [count, setCount] = useState(1)

  const USERS = [];

  for (let i = 0; i < count; i++) {
    USERS.push(<SomeUsers index={i} key={i} />)
  }

  return (
    <ul className={styles.list}>
      {USERS}
      <UIButton
        name={'moreButton'}
        text={'Показать еще'}
        icon={<ArrowIcon />}
        onClick={() => setCount(count + 1)}
      />
    </ul>
  )
}
