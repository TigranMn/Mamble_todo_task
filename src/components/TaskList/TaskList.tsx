import React from 'react';
import Task from '../Task/Task';
import { TTodosAction, TTodosState } from '../TodoList/TodoList';
import styles from './TaskList.module.css';

type TTaskListProps = {
   dispatch: (action: TTodosAction) => void;
   state: TTodosState;
};

export default function TaskList(props: TTaskListProps) {
   const {
      dispatch,
      state: { todos, hideCompleted },
   } = props;

   return !todos.length ? (
      <div className={styles.empty_zone_section}>
         <p>Your life is a blank page. You write on it.</p>
         <h3>So start by adding your tasks here.</h3>
      </div>
   ) : (
      <div className={styles.tasks_list_section}>
         <ul className={styles.tasks_list}>
            {todos.map((el) => {
               return !el.completed || !hideCompleted ? (
                  <Task
                     key={el.id}
                     todo={el}
                     dispatch={dispatch}
                  />
               ) : null;
            })}
         </ul>
      </div>
   );
}
