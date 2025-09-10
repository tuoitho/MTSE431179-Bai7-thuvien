import React from 'react';
import styles from './Button.module.css';

// variant: 'primary', 'danger'
// children: Nội dung của button
const Button = ({ children, onClick, variant = 'primary', ...props }) => {
  return (
    <button className={`${styles.btn} ${styles[variant]}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;