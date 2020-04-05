import React from 'react';
import { HeaderContent } from './styles';

export default function Header(props) {
  return (
    <HeaderContent fontSize={props.fontSize} fontSizeSmall={props.fontSizeSmall}>
      <h1>
        Previsão do tempo
      </h1>
    </HeaderContent>
  );
}
