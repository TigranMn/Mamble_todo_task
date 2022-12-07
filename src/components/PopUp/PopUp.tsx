import React from 'react';
import { TodoActions, TTodo, TTodosAction } from '../TodoList/TodoList';
import styles from './PopUp.module.css';
type TPopUpProps = {
  setModal: (active: boolean) => void;
  dispatch: (action: TTodosAction) => void;
  todo: TTodo;
};

export default function PopUp(props: TPopUpProps) {
  const { setModal, dispatch, todo } = props;

  const handleModalClick = (e: React.SyntheticEvent<HTMLDivElement>) => {
    let className;
    if (e.target instanceof HTMLElement) className = e.target.className;
    if (className === styles.pop_up_container) setModal(false);
  };

  const handleDelete = () => {
    dispatch({ type: TodoActions.DELETE_TODO, payload: todo });
    setModal(false);
  };

  return (
    <div onClick={handleModalClick} className={styles.pop_up_container}>
      <div className={styles.pop_up_box}>
        <p>Are you sure you want to delete?</p>
        <div>
          <span onClick={handleDelete}>Yes</span>
          <span
            onClick={() => {
              setModal(false);
            }}>
            No
          </span>
        </div>
      </div>
    </div>
  );
}
