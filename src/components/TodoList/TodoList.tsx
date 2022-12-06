import React, { useReducer } from 'react';
import HideCompleted from '../HideCompleted/HideCompleted';
import TaskInput from '../TaskInput/TaskInput';
import TaskList from '../TaskList/TaskList';
import styles from './TodoList.module.css';

export enum TodoActions {
   ADD_TODO = 'ADD_TODO',
   DELETE_TODO = 'DELETE_TODO',
   TOGGLE_COMPLETE = 'TOGGLE_COMPLETE',
}

type TTodosState = {
   todos: TTodo[];
};

export type TTodosAction = {
   type: TodoActions;
   payload: TTodo;
};

export type TTodo = {
   completed: boolean;
   description: string;
   id: number;
};

const initialState: TTodosState = {
   todos: [],
};

function todosReducer(state: TTodosState, action: TTodosAction): TTodosState {
   switch (action.type) {
      case TodoActions.ADD_TODO:
         return { todos: [...state.todos, action.payload] };

      case TodoActions.DELETE_TODO:
         return {
            todos: state.todos.filter((el) => el.id !== action.payload.id),
         };
      case TodoActions.TOGGLE_COMPLETE:
         return {
            todos: state.todos.map((el) => {
               if (el.id === action.payload.id) {
                  el.completed = !el.completed;
                  return el;
               }
               return el;
            }),
         };
   }
}

export default function TodoList() {
   const [state, dispatch] = useReducer(todosReducer, initialState);

   console.log(state);
   return (
      <div className={styles.main_wrapper}>
         <HideCompleted />
         <TaskInput dispatch={dispatch} />
         <TaskList
            dispatch={dispatch}
            todos={state.todos}
         />
      </div>
   );
}
