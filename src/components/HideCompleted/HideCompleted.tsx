import React, { useState } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import { TodoActions, TTodosAction } from '../TodoList/TodoList';
import styles from './HideCompleted.module.css';

type THideCompletedProps = {
   dispatch: (action: TTodosAction) => void;
};

export default function HideCompleted(props: THideCompletedProps) {
   const { dispatch } = props;
   const [hidden, setHidden] = useState<boolean>(false);
   return (
      <div className={styles.hide_check}>
         <Checkbox
            checked={hidden}
            onClick={() => {
               setHidden(!hidden);
               dispatch({ type: TodoActions.TOGGLE_HIDE_COMPLETED });
            }}
         />
         <span>Hide completed</span>
      </div>
   );
}
