import React, { FC } from 'react'
import styles from './UserInfo.module.scss'
import Image from 'next/image'
import { UIText } from '@/components/ui-components/UIText/UIText'
import { IUserCardProps } from '@/components/UserCard/UserCard'
import { getRandomUserPosition } from '@/utils/getRandomUserPosition'

type IUserInfoProps = IUserCardProps

const imageStyle = {
  borderRadius: '50%',
}

export const UserInfo: FC<IUserInfoProps> = ({ first_name, last_name, avatar, id }) => {
  return (
    <div className={styles.userInfo}>
      <Image
        src={avatar}
        alt='User Avatar'
        width={187}
        height={187}
        style={imageStyle}
      />
      <div className={styles.wrapper}>
        <UIText text={`${first_name} ${last_name}`}></UIText>
        <div className={styles.position}>{getRandomUserPosition(id)}</div>
      </div>
    </div>
  )
}
