import React, { FC } from 'react'
import { IContainerProps } from '../Container/Container'

type ICenterContainerProps = IContainerProps

export const CenterContainer: FC<ICenterContainerProps> = ({ children, width }) => {
  const STYLE = {
    margin: '0 auto',
    width: '100%',
    maxWidth: width,
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }
  return (
    <div style={STYLE}>
      {children}
    </div>
  )
}
