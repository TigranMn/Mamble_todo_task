import React, { useEffect } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import { TodoActions, TTodosAction } from '../TodoList/TodoList';
import styles from './HideCompleted.module.css';

type THideCompletedProps = {
   dispatch: (action: TTodosAction) => void;
   hideCompleted: boolean;
};

export default function HideCompleted(props: THideCompletedProps) {
   const { dispatch, hideCompleted } = props;

   useEffect(() => {
      dispatch({ type: TodoActions.HIDE_COMPLETED });
   }, [hideCompleted]);

   const handleCheck = () => {
      dispatch({ type: TodoActions.TOGGLE_HIDE_COMPLETED });
   };

   return (
      <div className={styles.hide_check}>
         <Checkbox
            checked={hideCompleted}
            onClick={handleCheck}
         />
         <span>Hide completed</span>
      </div>
   );
}
