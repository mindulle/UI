import type { HTMLAttributes } from 'react';

import { cx } from 'classix';

import styles from './styles/Nav.module.css';

type NavProps = HTMLAttributes<HTMLDivElement> & {
  'data-test-id'?: string;
};

const Nav = ({ children, className, 'data-test-id': testId = 'nav' }: NavProps) => {
  return (
    <div className={cx(styles.nav, className)} data-test-id={testId}>
      <span>{children}</span>
    </div>
  );
};

export { Nav };
export type { NavProps };