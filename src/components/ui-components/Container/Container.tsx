import React, { FC } from 'react'

interface IContainerProps {
    children: React.ReactNode;
    width: number;
}

export const Container: FC<IContainerProps> = ({ children, width }) => {
  const STYLE = {
    margin: '0 auto',
    width: width,
  }
  return (
    <div style={STYLE}>
      {children}
    </div>
  )
}
