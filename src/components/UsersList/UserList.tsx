import React, { FC } from 'react'
import styles from './UserList.module.scss'
import { UserCard } from '../UserCard/UserCard'


interface IUserList {
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  avatar: string
}
// FC<IUserList>
export const UserList  = () => {
  return (
    <ul className={styles.list}>
      {/* {data.map((item) => (
        <UserCard />
      ))} */}
      <UserCard />
    </ul>
  )
}
