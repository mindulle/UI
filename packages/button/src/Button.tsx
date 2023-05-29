import type { HTMLAttributes } from 'react';

import { cx } from 'classix';

import styles from './styles/Button.module.css';

type ButtonProps = HTMLAttributes<HTMLDivElement> & {
  'data-test-id'?: string;
};

const Button = ({ children, className, 'data-test-id': testId = 'button' }: ButtonProps) => {
  return (
    <div className={cx(styles.button, className)} data-test-id={testId}>
      <span>{children}</span>
    </div>
  );
};

export { Button };
export type { ButtonProps };