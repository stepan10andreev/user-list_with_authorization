import { UsersService } from '@/services/users.service';
import React, { FC, useEffect } from 'react'
import useSWR from 'swr';
import { UserCard } from '../UserCard/UserCard';
import { PulseLoader } from 'react-spinners';
import styles from './UserList.module.scss'
import { useAppDispatch } from '../Hooks/useApp';
import { updateUsersState } from '@/store/usersState';

interface ISomeUsersProps {
  index: number;
}

export const SomeUsers: FC<ISomeUsersProps> = ({ index }) => {
  const { data, isLoading, error } = useSWR(`/api/users?page=${index}`, UsersService.getUsers);

  const dispatch = useAppDispatch();

  useEffect(() => {
    (data?.length === 0) ?  dispatch(updateUsersState('usersIsOver', true)) : dispatch(updateUsersState('usersIsOver', false))
    !isLoading && dispatch(updateUsersState('isLoadingData', false))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isLoading])

  if (isLoading) return (
    <div className={styles.spinner}>
      <PulseLoader
        color="#512689"
        size={20}
      />
    </div>
  )

  return (
    <>
      {data?.map((user) => (
        <UserCard
          key={user.id}
          avatar={user.avatar}
          first_name={user.first_name}
          last_name={user.last_name}
          id={user.id}
        />
      ))}
    </>
  )
}
