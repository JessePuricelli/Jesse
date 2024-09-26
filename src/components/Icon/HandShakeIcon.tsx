import { FC, memo } from 'react';
import Icon, { IconProps } from './Icon';

// Extend IconProps to include viewBox
interface HandShakeIconProps extends IconProps {
  viewBox?: string;
}

const HandShakeIcon: FC<HandShakeIconProps> = memo(props => (
  <Icon {...props}>
    <rect x="2" y="2" width="20" height="21" rx="4" ry="4" fill="currentColor"/>
    <path d="M7 5v14h2v-6h6v6h2V5h-2v6H9V5H7z" fill="Black"/>
  </Icon>
));

HandShakeIcon.defaultProps = {
  viewBox: "0 0 24 24"
};

export default HandShakeIcon;
