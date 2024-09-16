import {FC, memo} from 'react';
import Icon, {IconProps} from './Icon';

const HandShakeIcon: FC<IconProps> = memo(props => (
  <Icon viewBox="0 0 24 24" {...props}>
    <rect x="2" y="2" width="20" height="21" rx="4" ry="4" fill="currentColor"/>
    <path d="M7 5v14h2v-6h6v6h2V5h-2v6H9V5H7z" fill="Black"/>
  </Icon>
));

export default HandShakeIcon;
