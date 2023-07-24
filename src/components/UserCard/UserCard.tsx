'use client'
import React, { FC, useEffect, useState } from 'react'
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
  // localStorage  - сохранение после перезагрухки лайков
  // const [isLiked, setIsLiked] = useState(false)
  const [currentLiked, setCurrentLiked] = useState<boolean>(false)

  useEffect(() => {
    localStorage.getItem(`userLike-${id}`) ? setCurrentLiked(true) : setCurrentLiked(false)
  }, [])

  const handleLike = () => {
    // setIsLiked(!isLiked)
    setCurrentLiked(!currentLiked)
    !localStorage.getItem(`userLike-${id}`) ? localStorage.setItem(`userLike-${id}`, 'true') : localStorage.removeItem(`userLike-${id}`)
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
      {currentLiked ? (
        <UIButton name={'likeButton'} icon={<LikeIcon isLiked={currentLiked} />} onClick={handleLike} />
      ) : (
        <UIButton name={'likeButton'} icon={<LikeIcon />} onClick={handleLike} />
      )}
    </article>
  )
}
