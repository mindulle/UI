import type { IconProps } from './Icon';

import { StopSign } from './StopSign';
import { CheckInCircle } from './CheckInCircle';
import { InfoSign } from './InfoSign';
import { WarningSign } from './WarningSign';

type StatusIconProps = IconProps & {
  kind: 'info' | 'success' | 'warning' | 'error';
};

const StatusIcon = ({ kind, size = 'medium', ...rest }: StatusIconProps) => {
  let Component;
  let ariaLabel;

  switch (kind) {
    case 'success':
      Component = CheckInCircle;
      ariaLabel = 'Success';
      break;
    case 'warning':
      Component = WarningSign;
      ariaLabel = 'Warning';
      break;
    case 'error':
      Component = StopSign;
      ariaLabel = 'Error';
      break;
    case 'info':
      Component = InfoSign;
      ariaLabel = 'Info';
      break;
  }

  return <Component aria-label={`${ariaLabel} icon`} role="img" size={size} {...rest} />;
};

export { StatusIcon };
export type { StatusIconProps };