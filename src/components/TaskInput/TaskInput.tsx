import React, { useState, useEffect } from 'react';
import { useValidation } from '../../hooks/useValidation';
import DeleteBtn from '../DeleteBtn/DeleteBtn';
import { TodoActions, TTodosAction } from '../TodoList/TodoList';
import styles from './TaskInput.module.css';

type TTaskInputProps = {
   dispatch: (action: TTodosAction) => void;
};

export default function TaskInput(props: TTaskInputProps) {
   const [description, setDescription] = useState<string>('');
   const [isValid, setIsValid] = useState<boolean>(true);
   const [isFocused, setIsFocused] = useState<boolean>(false);

   const valid = useValidation(description);

   const { dispatch } = props;
   useEffect(() => {
      setIsValid(valid);
   }, [description]);

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (description.trim().length) {
         dispatch({
            type: TodoActions.ADD_TODO,
            payload: {
               description,
               completed: false,
               id: Date.now(),
               hidden: false,
            },
         });
      }
      setDescription('');
   };

   const clearInput = () => {
      setDescription('');
   };

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setDescription(e.target.value);
   };

   return (
      <form className={styles.input_section}>
         <h2>Task</h2>
         <div className={styles.task_input}>
            <div
               style={{
                  border: isValid ? '1px solid #FFCD04' : '1px solid #FF3104',
               }}
               className={styles.input_box}>
               <input
                  onFocus={() => {
                     setIsFocused(true);
                  }}
                  onBlur={() => {
                     setIsFocused(false);
                  }}
                  onChange={handleChange}
                  value={description}
                  type='text'
                  placeholder='Write here'
               />
               {isFocused ? <DeleteBtn onClick={clearInput} /> : null}
            </div>
            <button
               disabled={!isValid}
               onClick={handleSubmit}
               className={styles.add_button}
               type='submit'>
               Add
            </button>
         </div>
         {!isValid ? <p>Task content can contain max 54 characters</p> : null}
      </form>
   );
}
