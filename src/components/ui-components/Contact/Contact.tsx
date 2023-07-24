import React, { FC } from 'react'
import styles from './Contact.module.scss'
import { EmailIcon } from '../Icons/EmailIcon';
import { PhoneIcon } from '../Icons/PhoneIcon';
import { UIText } from '../UIText/UIText';
import { deleteAllSpaces } from '@/utils/deleteAllSpaces';

export enum EContactType {
  mail = "mailto",
  phone = "tel",
  skype = "skype",
}

export interface IContactProps {
  contactType: EContactType;
  contactValue: string;
}


export const Contact: FC<IContactProps> = ({ contactType, contactValue }) => {
  const mail = contactType === 'mailto';
  const phone = contactType === 'tel';
  const skype = contactType === 'skype';

  return (
    <a href={`${contactType}:${deleteAllSpaces(contactValue)}`} className={styles.contactLink}>
      {mail && <EmailIcon />}
      {phone && <PhoneIcon />}
      <UIText text={contactValue} />
    </a>
  )
}
