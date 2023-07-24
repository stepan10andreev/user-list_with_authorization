import React, { FC, PropsWithChildren } from 'react'
import styles from './Header.module.scss'
import { useParams } from 'next/navigation'
import { useAppSelector } from '../Hooks/useApp';

export const Header: FC<PropsWithChildren> = ({ children }) => {

  return (
    <header className={styles.header}>
      {children}
    </header>
  )
}
