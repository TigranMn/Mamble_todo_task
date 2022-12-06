import React from 'react';
import Checkbox from '../Checkbox/Checkbox';
import { TodoActions, TTodo, TTodosAction } from '../TodoList/TodoList';

type TTaskProps = {
   todo: TTodo;
   dispatch: (action: TTodosAction) => void;
};

export default function Task(props: TTaskProps) {
   const { todo, dispatch } = props;
   return (
      <li>
         <Checkbox
            checked={todo.completed}
            onClick={() => {
               dispatch({ type: TodoActions.TOGGLE_COMPLETE, payload: todo });
            }}
         />
         <span style={{ color: !todo.completed ? '#666666' : '#ACACAC' }}>
            {todo.description}
         </span>
         <svg
            onClick={() => {
               dispatch({ type: TodoActions.DELETE_TODO, payload: todo });
            }}
            style={{ cursor: 'pointer' }}
            width='14'
            height='14'
            viewBox='0 0 14 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
               d='M13.3 0.710001C12.91 0.320001 12.28 0.320001 11.89 0.710001L7 5.59L2.11 0.700001C1.72 0.310001 1.09 0.310001 0.700001 0.700001C0.310001 1.09 0.310001 1.72 0.700001 2.11L5.59 7L0.700001 11.89C0.310001 12.28 0.310001 12.91 0.700001 13.3C1.09 13.69 1.72 13.69 2.11 13.3L7 8.41L11.89 13.3C12.28 13.69 12.91 13.69 13.3 13.3C13.69 12.91 13.69 12.28 13.3 11.89L8.41 7L13.3 2.11C13.68 1.73 13.68 1.09 13.3 0.710001Z'
               fill='#174348'
            />
         </svg>
      </li>
   );
}
