import { reducerState, reducerActions, actionsTypes, TodoItem } from '../../../helpers/types'

export const reducer = (state: reducerState, action: reducerActions): reducerState => {
    switch (action.type) {
        case actionsTypes.SET_TODOS:
            return {todos: action.payload}

        case actionsTypes.ADD_TODO:
            return {todos: [action.payload, ...state.todos]}

        case actionsTypes.UPDATE_TODO:
            return {todos: (state.todos as TodoItem[]).map(todo => {
                if(todo.id === action.payload.id) return action.payload
                return todo
            })}

        case actionsTypes.DELETE_TODO:
            return {todos: state.todos.filter(todo => todo.id !== action.payload )}

        default:
            return state
    }
}