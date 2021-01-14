import React from 'react'
import { TodoItem } from '../../helpers/types'
import { addTodoAction } from './store/actions'

import { reducer } from './store/reducer'
import TodosItem from './TodosItem'

import './styles.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

type TodosProps = {
    newTodo: TodoItem | null
}

const Todos: React.FC<TodosProps> = React.memo(({ newTodo }): React.ReactElement => {
    const [state, dispatch] = React.useReducer(reducer, JSON.parse(localStorage.getItem('todo-list') || '{"todos": []}'))

    React.useEffect(() => { localStorage.setItem('todo-list', JSON.stringify(state)) }, [state])

    React.useEffect(() => { newTodo && dispatch(addTodoAction(newTodo)) }, [newTodo])

    return (
        <div className="todos">
            <TransitionGroup>
                {(state.todos as TodoItem[]).map((item: TodoItem) => (
                    <CSSTransition key={item.id} classNames="animate" timeout={400}>
                        <TodosItem item={item} dispatch={dispatch} />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    )
})

export default Todos