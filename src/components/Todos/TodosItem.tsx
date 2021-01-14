import classNames from 'classnames'
import React from 'react'
import { FaPen, FaTrash } from 'react-icons/fa'

import { reducerActions, TodoItem } from '../../helpers/interfaces'
import { deleteTodoAction, updateTodoAction } from './store/actions'

type TodosItemProps = {
    item: TodoItem
    dispatch: React.Dispatch<reducerActions>
}

const TodosItem: React.FC<TodosItemProps> = React.memo(({ item, dispatch }): React.ReactElement => {
    const { id, title, completed } = item

    const classes = classNames("todos__item", { completed: completed })

    const handleChangeComplete = (): void => {
        dispatch(updateTodoAction({...item, completed: !completed}))
    }

    const handleDeleteTodo = (): void => {
        dispatch(deleteTodoAction(id))
    }

    return (
        <div className={classes}>
            <div className="todos__item__content">
                <input className="todos__item__checkbox" type="checkbox" checked={completed} onChange={handleChangeComplete} />
                <div className="todos__item__title">{title}</div>
            </div>
            <div className="todos__item__actions">
                <button className="todos__item__edit"><FaPen size={16} /></button>
                <button className="todos__item__delete" onClick={handleDeleteTodo}><FaTrash size={16} /></button>
            </div>
        </div>
    )
})

export default TodosItem
