import React from 'react'
import { TodoItem } from '../../helpers/interfaces'
import { addTodoAction } from './store/actions'

import { reducer } from './store/reducer'
import TodosItem from './TodosItem'

import './styles.css'

type TodosProps = {
    newTodo: TodoItem | null
}

const Todos: React.FC<TodosProps> = React.memo(({ newTodo }): React.ReactElement => {
    const [state, dispatch] = React.useReducer(reducer, JSON.parse(localStorage.getItem('todo-list') || '{"todos": []}'))
    
    React.useEffect(() => {
        localStorage.setItem('todo-list', JSON.stringify(state))
    }, [state])

    React.useEffect(() => {
        if(newTodo) {
            dispatch(addTodoAction(newTodo))
        }
    }, [newTodo])

    return (
        <div className="todos">
            {(state.todos as TodoItem[]).map((item: TodoItem) => (
                <TodosItem key={item.id} item={item} dispatch={dispatch} />
            ))}
        </div>
    )
})

export default Todos