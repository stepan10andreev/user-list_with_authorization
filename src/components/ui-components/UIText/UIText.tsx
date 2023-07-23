import React, { FC } from 'react'

interface IText {
  As?: 'span' | 'p' | 'div';
  text: string;
  // mobileSize?: TSizes;
  // tabletSize?: TSizes;
  // desktopSize?: TSizes;
  // color?: EColor;
  // bold?: boolean;
}


export const UIText: FC<IText> = ({ As = 'span', text }) => {
  return (
    <As>
      {text}
    </As>
  )
}
