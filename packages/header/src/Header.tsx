import type { HTMLAttributes } from 'react';

import { cx } from 'classix';

import styles from './styles/Header.module.css';

type HeaderProps = HTMLAttributes<HTMLDivElement> & {
  'data-test-id'?: string;
};

const Header = ({ children, className, 'data-test-id': testId = 'header' }: HeaderProps) => {
  return (
    <div className={cx(styles.header, className)} data-test-id={testId}>
      <span>{children}</span>
    </div>
  );
};

export { Header };
export type { HeaderProps };