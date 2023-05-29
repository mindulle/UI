import type { HTMLAttributes } from 'react';

import { cx } from 'classix';

import styles from './styles/DatePicker.module.css';

type DatePickerProps = HTMLAttributes<HTMLDivElement> & {
  'data-test-id'?: string;
};

const DatePicker = ({ children, className, 'data-test-id': testId = 'date-picker' }: DatePickerProps) => {
  return (
    <div className={cx(styles.datePicker, className)} data-test-id={testId}>
      <span>{children}</span>
    </div>
  );
};

export { DatePicker };
export type { DatePickerProps };