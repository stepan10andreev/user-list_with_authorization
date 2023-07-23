import React from 'react'
import { USER_DESCRIPTION_1, USER_DESCRIPTION_2, USER_DESCRIPTION_3 } from '@/constants/textConstants'
import { UIText } from '@/components/ui-components/UIText/UIText'
import styles from './UserDescription.module.scss'

export const UserDescription = () => {
  return (
    <div className={styles.wrapper}>
      <UIText As='p' text={USER_DESCRIPTION_1}/>
      <UIText As='p' text={USER_DESCRIPTION_2}/>
      <UIText As='p' text={USER_DESCRIPTION_3}/>
    </div>
  )
}
