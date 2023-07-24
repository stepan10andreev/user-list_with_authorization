import React, { FC, MouseEventHandler, useState } from 'react'
import { ViewIcon } from '../Icons/ViewIcon'
import { NoViewIcon } from '../Icons/NoViewIcon'

interface IHiddingButtonProps {
  isVisible: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>
}

export const HiddingButtom: FC<IHiddingButtonProps> = ({ onClick, isVisible }) => {
  return (
    <button onClick={onClick} name='hiddingButton' type='button'>
      {isVisible ? <NoViewIcon /> : <ViewIcon />}
    </button>
  )
}
