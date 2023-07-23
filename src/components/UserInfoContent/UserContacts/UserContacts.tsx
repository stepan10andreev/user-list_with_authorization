import React, { FC, PropsWithChildren } from 'react'
import styles from './UserContacts.module.scss'
import { Contact, EContactType, IContactProps } from '../../ui-components/Contact/Contact'

interface IUserContacts extends Pick<IContactProps, 'contactValue'> { }

export const UserContacts: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.contacts}>
      {/* <Contact contactType={EContactType.phone} contactValue={contactValue} />
      <Contact contactType={EContactType.mail} contactValue={contactValue} /> */}
      {children}
    </div>
  )
}
