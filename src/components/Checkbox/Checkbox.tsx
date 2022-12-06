import React from 'react';
import styles from './Checkbox.module.css';

type TCheckboxProps = {
   checked: boolean;
   onClick: () => void;
};

export default function Checkbox(props: TCheckboxProps) {
   const { checked, onClick } = props;
   return checked ? (
      <svg
         onClick={onClick}
         className={styles.checked}
         width='18'
         height='18'
         viewBox='0 0 18 18'
         fill='none'>
         <path
            d='M16 0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.11 18 18 17.1 18 16V2C18 0.9 17.11 0 16 0ZM7 14L2 9L3.41 7.59L7 11.17L14.59 3.58L16 5L7 14Z'
            fill='#008594'
         />
      </svg>
   ) : (
      <svg
         onClick={onClick}
         className={styles.non_checked}
         width='18'
         height='19'
         viewBox='0 0 18 19'
         fill='none'
         xmlns='http://www.w3.org/2000/svg'>
         <path
            d='M16 2.96008V16.8483H2V2.96008H16ZM16 0.976044H2C0.9 0.976044 0 1.86886 0 2.96008V16.8483C0 17.9395 0.9 18.8323 2 18.8323H16C17.1 18.8323 18 17.9395 18 16.8483V2.96008C18 1.86886 17.1 0.976044 16 0.976044Z'
            fill='#008594'
         />
      </svg>
   );
}
