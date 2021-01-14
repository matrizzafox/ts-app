import React from 'react'
import classNames from 'classnames';

import { BiDotsVerticalRounded } from 'react-icons/bi'

type TodosItemActionsProps = {
    onDelete: () => void,
    onEdit: () => void
}

const TodosItemActions: React.FC<TodosItemActionsProps> = React.memo(({ onDelete, onEdit }): React.ReactElement => {
    const [active, setActive] = React.useState<boolean>(false)

    const classes = classNames("todos__item__popup", {active});

    const checkClick = React.useCallback((): void => {
        setActive(false)
    }, [])

    React.useEffect(() => {
        if(active) document.addEventListener('click', checkClick)
        else  document.removeEventListener('click', checkClick)

        return () => document.removeEventListener('click', checkClick)
    }, [active, checkClick])

    const onToggle = (): void => {
        setActive(!active)
    }

    return (
        <div className="todos__item__actions">
            <button className="todos__item__toggle" onClick={onToggle}><BiDotsVerticalRounded size={20} /></button>
            <div className={classes}>
                <button className="todos__item__action" onClick={onEdit}>Редактировать</button>
                <button className="todos__item__action" onClick={onDelete}>Удалить</button>
            </div>
        </div>
    )
})

export default TodosItemActions
