import React, { useReducer, useEffect } from 'react';
import HideCompleted from '../HideCompleted/HideCompleted';
import TaskInput from '../TaskInput/TaskInput';
import TaskList from '../TaskList/TaskList';
import styles from './TodoList.module.css';

export enum TodoActions {
   ADD_TODO = 'ADD_TODO',
   DELETE_TODO = 'DELETE_TODO',
   TOGGLE_COMPLETE = 'TOGGLE_COMPLETE',
   HIDE_COMPLETED = 'HIDE_COMPLETED',
   TOGGLE_HIDE_COMPLETED = 'TOGGLE_HIDE_COMPLETED',
}

type TTodosState = {
   todos: TTodo[];
   hideCompleted: boolean;
};

export type TTodosAction = {
   type: TodoActions;
   payload?: TTodo;
};

export type TTodo = {
   completed: boolean;
   description: string;
   id: number;
   hidden: boolean;
};

const initialState: TTodosState = {
   todos: JSON.parse(localStorage.getItem('todos')!) || [],
   hideCompleted: false,
};

function todosReducer(state: TTodosState, action: TTodosAction): TTodosState {
   switch (action.type) {
      case TodoActions.ADD_TODO:
         return { ...state, todos: [action.payload!, ...state.todos] };

      case TodoActions.DELETE_TODO: {
         return {
            ...state,
            todos: state.todos.filter((el) => el.id !== action.payload!.id),
         };
      }
      case TodoActions.TOGGLE_COMPLETE: {
         return {
            ...state,
            todos: state.todos.map((el) => {
               if (el.id === action.payload!.id) {
                  el.completed = !el.completed;
                  if (state.hideCompleted) {
                     el.hidden = !el.hidden;
                  }
                  return el;
               }
               return el;
            }),
         };
      }
      case TodoActions.HIDE_COMPLETED:
         return {
            ...state,
            todos: state.todos.map((el) => {
               if (el.completed) {
                  el.hidden = state.hideCompleted;
                  return el;
               }
               return el;
            }),
         };
      case TodoActions.TOGGLE_HIDE_COMPLETED:
         return { ...state, hideCompleted: !state.hideCompleted };
      default:
         return state;
   }
}

export default function TodoList() {
   const [state, dispatch] = useReducer(todosReducer, initialState);

   useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(state.todos));
   }, [state.todos]);

   return (
      <div className={styles.main_wrapper}>
         <HideCompleted
            hideCompleted={state.hideCompleted}
            dispatch={dispatch}
         />
         <TaskInput dispatch={dispatch} />
         <TaskList
            dispatch={dispatch}
            todos={state.todos}
         />
      </div>
   );
}
