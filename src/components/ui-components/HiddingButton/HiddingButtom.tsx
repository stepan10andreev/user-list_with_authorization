import React, { FC, MouseEventHandler } from 'react'
import { ViewIcon } from '../Icons/ViewIcon'
import { NoViewIcon } from '../Icons/NoViewIcon'

interface IHiddingButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>
}

export const HiddingButtom: FC<IHiddingButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <ViewIcon />
      <NoViewIcon />
    </button>
  )
}
