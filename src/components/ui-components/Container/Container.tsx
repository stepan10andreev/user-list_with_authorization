import React, { FC } from 'react'

export interface IContainerProps {
  children: React.ReactNode;
  width: number;
}

export const Container: FC<IContainerProps> = ({ children, width }) => {
  const STYLE = {
    margin: '0 auto',
    position: 'relative' as 'relative',
    width: '100%',
    maxWidth: width,
  }

  return (
    <div style={STYLE}>
      {children}
    </div>
  )
}
