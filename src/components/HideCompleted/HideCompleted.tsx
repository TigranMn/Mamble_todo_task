import React from 'react';
import Checkbox from '../Checkbox/Checkbox';
import styles from './HideCompleted.module.css';

export default function HideCompleted() {
   return (
      <div className={styles.hide_check}>
         <Checkbox
            checked={false}
            onClick={() => {
               console.log(1);
            }}
         />
         <span>Hide completed</span>
      </div>
   );
}
