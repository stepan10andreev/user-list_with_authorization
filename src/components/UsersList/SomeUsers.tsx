import { UsersService } from '@/services/users.service';
import React, { FC } from 'react'
import useSWR from 'swr';
import { UserCard } from '../UserCard/UserCard';

interface ISomeUsersProps {
  index: number;
}

export const SomeUsers: FC<ISomeUsersProps> = ({ index }) => {
  const { data, isLoading, error } = useSWR(`/api/users?page=${index}`, UsersService.getUsers);

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
