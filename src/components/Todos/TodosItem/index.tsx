import React from 'react'
import classNames from 'classnames'
import dayjs from 'dayjs'
import Calendar from "dayjs/plugin/calendar";

import { editableTodo, reducerActions, TodoItem } from '../../../helpers/types'
import dateFormat from '../../../helpers/dateFormat'
import { deleteTodoAction, updateTodoAction } from '../store/actions'

import TodosItemActions from './TodosItemActions'

import './styles/styles.css'

dayjs.extend(Calendar)

type TodosItemProps = {
    item: TodoItem
    dispatch: React.Dispatch<reducerActions>
};

const TodosItem: React.FC<TodosItemProps> = React.memo(({ item, dispatch }): React.ReactElement => {
    const { id, title, completed, completedAt } = item

    const timeStamp = React.useMemo(() => dayjs(completedAt).calendar(undefined, dateFormat), [completedAt])

    const [edit, setEdit] = React.useState<editableTodo>({ isEditing: false, value: title })

    const inputRef = React.useRef<HTMLInputElement | null>(null)

    const classes = classNames("todos__item", { completed: completed })

    const handleChangeComplete = (): void => {
        dispatch(updateTodoAction({ ...item, completed: !completed, completedAt: completed ? undefined : new Date().toISOString() }))
    }

    const handleUpdateTitle = React.useCallback((e: React.FormEvent<HTMLFormElement> | MouseEvent): void => {
        e.preventDefault()
        const value = edit.value.length === 0 ? title : edit.value
        setEdit(prev => ({ ...prev, isEditing: false }))
        dispatch(updateTodoAction({ ...item, title: value }))
    }, [dispatch, edit.value, item, title])

    const handleDeleteTodo = React.useCallback((): void => {
        dispatch(deleteTodoAction(id))
    }, [dispatch, id])

    const handleEditTodo = React.useCallback((): void => {
        setEdit(prev => ({ ...prev, isEditing: true }))
    }, [])

    const outsideClick = React.useCallback((e: MouseEvent): void => {
        const target = e.target as HTMLInputElement
        if (target.classList[0] !== 'todo__item__input') handleUpdateTitle(e)
    }, [handleUpdateTitle])

    React.useEffect(() => {
        if (edit.isEditing) {
            document.addEventListener('click', outsideClick)
            inputRef.current?.focus()
        }

        return () => document.removeEventListener('click', outsideClick)
    }, [edit.isEditing, outsideClick])

    return (
        <div className={classes}>
            <div className="todos__item__content">
                {completed && <div className="todo_item_timestamp">
                    <b>Завершен:</b> {timeStamp}
                </div>}
                <input className="todos__item__checkbox" id={id} type="checkbox" checked={completed} onChange={handleChangeComplete} />
                <label htmlFor={id}></label>
                <div className="todos__item__title">
                    {edit.isEditing ?
                        <form onSubmit={handleUpdateTitle}><input ref={inputRef} className="todo__item__input" type="text" value={edit.value} onChange={(e) => { setEdit(prev => ({ ...prev, value: e.target.value })) }} /></form>
                        : <span onDoubleClick={handleEditTodo}>{edit.value}</span>
                    }
                </div>
            </div>
            <TodosItemActions onDelete={handleDeleteTodo} onEdit={handleEditTodo} />
        </div>
    )
})

export default TodosItem
