import React, { useState, useEffect } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import { TodoActions, TTodosAction } from '../TodoList/TodoList';
import styles from './HideCompleted.module.css';

type THideCompletedProps = {
   dispatch: (action: TTodosAction) => void;
};

const initialState: boolean =
   JSON.parse(localStorage.getItem('hideCompleted')!) || false;

export default function HideCompleted(props: THideCompletedProps) {
   const { dispatch } = props;
   const [hidden, setHidden] = useState<boolean>(initialState);

   useEffect(() => {
      localStorage.setItem('hideCompleted', JSON.stringify(hidden));
   }, [hidden]);

   const handleCheck = () => {
      setHidden(!hidden);
      dispatch({ type: TodoActions.TOGGLE_HIDE_COMPLETED });
   };

   return (
      <div className={styles.hide_check}>
         <Checkbox
            checked={hidden}
            onClick={handleCheck}
         />
         <span>Hide completed</span>
      </div>
   );
}
