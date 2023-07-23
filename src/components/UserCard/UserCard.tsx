'use client'
import React, { useState } from 'react'
import styles from './UserCard.module.scss'
import { UIText } from '../ui-components/UIText/UIText'
import Image from 'next/image'
import { UIButton } from '../ui-components/UIButton/UIButton'
import { LikeIcon } from '../ui-components/Icons/LikeIcon'

const imageStyle = {
  borderRadius: '50%',
  // borderRadius: '1px solid #fff',
}

export const UserCard = () => {
  const [isLiked, setIsLiked] = useState(false)

  const handleLike = () => {
    setIsLiked(!isLiked)
  }

  return (
    <article className={styles.card}>
        <div className={styles.avatarWrapper}>
          <Image
            src="https://reqres.in/img/faces/7-image.jpg"
            alt='Avatar'
            width={124}
            height={124}
            style={imageStyle}
          />
        </div>
        <UIText As={'p'} text={'Артур Королёв'}></UIText>
        {isLiked ? (
          <UIButton name={'likeButton'} icon={<LikeIcon isLiked={isLiked}/>} onClick={handleLike}/>
        ) : (
          <UIButton name={'likeButton'} icon={<LikeIcon/>} onClick={handleLike}/>
        )}

    </article>
  )
}
