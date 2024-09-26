import {FC, memo} from 'react';

import Icon, {IconProps} from './Icon';


const HandShakeIcon: FC<IconProps> = memo(props => (
  <Icon viewBox="0 0 24 24" {...props}>
    <rect width="24" height="24" rx="4" ry="4" fill="currentColor"/>
    <path d="M6 6v12h3v-5h6v5h3V6h-3v5H9V6H6z" fill="white"/>
  </Icon>
));

export default HandShakeIcon;
