import React, { useState, useEffect } from 'react';
import { useValidation } from '../../hooks/useValidation';
import { TodoActions, TTodosAction } from '../TodoList/TodoList';
import styles from './TaskInput.module.css';

type TTaskInputProps = {
   dispatch: (action: TTodosAction) => void;
};

export default function TaskInput(props: TTaskInputProps) {
   const [description, setDescription] = useState<string>('');
   const [isValid, setIsValid] = useState<boolean>(true);

   const valid = useValidation(description);

   const { dispatch } = props;
   useEffect(() => {
      setIsValid(valid);
   }, [description]);

   const handleSubmit = (e: React.SyntheticEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (description.trim().length) {
         dispatch({
            type: TodoActions.ADD_TODO,
            payload: { description, completed: false, id: Date.now() },
         });
      }
      setDescription('');
   };

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setDescription(e.target.value);
   };

   return (
      <form className={styles.input_section}>
         <h2>Task</h2>
         <div className={styles.task_input}>
            <input
               onChange={handleChange}
               value={description}
               type='text'
               placeholder='Write here'
               style={{
                  border: isValid ? '1px solid #ffff00' : '1px solid red',
               }}
            />
            <button
               disabled={!isValid}
               onClick={handleSubmit}
               className={styles.add_button}
               type='submit'>
               Add
            </button>
         </div>
      </form>
   );
}
