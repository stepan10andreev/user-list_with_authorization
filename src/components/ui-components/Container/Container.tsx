import React, { FC } from 'react'

interface IContainerProps {
    children: React.ReactNode;
    width: number;
}

export const Container: FC<IContainerProps> = ({ children, width }) => {
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
