import React, { FC } from 'react'
import styles from './UserInfoContent.module.scss'
import { UserDescription } from './UserDecription/UserDescription'
import { UserContacts } from './UserContacts/UserContacts'
import { IUsersData } from '@/services/users.service'
import { Contact, EContactType } from '../ui-components/Contact/Contact'
import { getRandomPhoneNumber } from '@/utils/getRandomPhoneNumber'

interface IUserInfoContentProps extends Pick<IUsersData, 'email' | 'id'> { }

export const UserInfoContent: FC<IUserInfoContentProps> = ({ email, id }) => {
  return (
    <div className={styles.wrapper}>
      <UserDescription />
      <UserContacts>
        <Contact contactType={EContactType.phone} contactValue={getRandomPhoneNumber(id)} />
        <Contact contactType={EContactType.mail} contactValue={email} />
      </UserContacts>
    </div>
  )
}
