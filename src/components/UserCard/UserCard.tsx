'use client'
import React, { FC, useState } from 'react'
import styles from './UserCard.module.scss'
import { UIText } from '../ui-components/UIText/UIText'
import Image from 'next/image'
import { UIButton } from '../ui-components/UIButton/UIButton'
import { LikeIcon } from '../ui-components/Icons/LikeIcon'
import { IUsersData } from '@/services/users.service'
import Link from 'next/link'


export interface IUserCardProps extends Pick<IUsersData, 'first_name' | 'last_name' | 'avatar' | 'id'> { }

const imageStyle = {
  borderRadius: '50%',
}

export const UserCard: FC<IUserCardProps> = ({ first_name, last_name, avatar, id }) => {
  const [isLiked, setIsLiked] = useState(false)

  const handleLike = () => {
    setIsLiked(!isLiked)
  }

  return (
    <article className={styles.card}>
      <Link href={`/users/${id}`}>
        <div className={styles.avatarWrapper}>
          <Image
            src={avatar}
            alt='Avatar'
            width={124}
            height={124}
            style={imageStyle}
          />
        </div>
        <UIText As={'p'} text={`${first_name} ${last_name}`}></UIText>
      </Link>
      {isLiked ? (
        <UIButton name={'likeButton'} icon={<LikeIcon isLiked={isLiked} />} onClick={handleLike} />
      ) : (
        <UIButton name={'likeButton'} icon={<LikeIcon />} onClick={handleLike} />
      )}
    </article>
  )
}
