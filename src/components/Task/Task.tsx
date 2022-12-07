import React, { useState } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import PopUp from '../PopUp/PopUp';
import styles from './Task.module.css';
import { TodoActions, TTodo, TTodosAction } from '../TodoList/TodoList';
import DeleteBtn from '../DeleteBtn/DeleteBtn';

type TTaskProps = {
   todo: TTodo;
   dispatch: (action: TTodosAction) => void;
};

export default function Task(props: TTaskProps) {
   const [modalActive, setModalActive] = useState<boolean>(false);
   const { todo, dispatch } = props;

   return (
      <>
         <li className={styles.task_list_item}>
            <Checkbox
               checked={todo.completed}
               onClick={() => {
                  dispatch({
                     type: TodoActions.TOGGLE_COMPLETE,
                     payload: todo,
                  });
               }}
            />
            <span style={{ color: !todo.completed ? '#666666' : '#ACACAC' }}>
               {todo.description}
            </span>
            <DeleteBtn
               onClick={() => {
                  setModalActive(true);
               }}
            />
         </li>
         {modalActive ? (
            <PopUp
               dispatch={dispatch}
               todo={todo}
               setModal={setModalActive}
            />
         ) : null}
      </>
   );
}
