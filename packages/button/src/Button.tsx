import type { ButtonHTMLAttributes } from 'react';

import { cx } from 'classix';

import styles from './styles/Button.module.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  'data-test-id'?: string;
};

const Button = ({ name ,children, className, 'data-test-id': testId = 'button' }: ButtonProps) => {
  return (
    <div className={cx(styles.button, className)} data-test-id={testId}>
      <span>{children}</span>
      <span>{name}</span>
    </div>
  );
};

export { Button };
export type { ButtonProps };