import { UsersService } from '@/services/users.service';
import React, { FC, useEffect } from 'react'
import useSWR from 'swr';
import { UserCard } from '../UserCard/UserCard';
import { PulseLoader } from 'react-spinners';
import styles from './UserList.module.scss'

interface ISomeUsersProps {
  index: number;
}

export const SomeUsers: FC<ISomeUsersProps> = ({ index }) => {
  const { data, isLoading, error } = useSWR(`/api/users?page=${index}`, UsersService.getUsers);

  if (isLoading) return (
    <div className={styles.spinner}>
      <PulseLoader
        color="#512689"
        size={20}
      />
    </div>
  )

  if (data?.length === 0) return null


  return (
    <>
      {data?.map((user) => (
        <UserCard
          key={user.id}
          avatar={user.avatar}
          first_name={user.first_name}
          last_name={user.last_name}
        />
      ))}
    </>
  )
}
