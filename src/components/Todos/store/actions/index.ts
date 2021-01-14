import { actionsTypes, reducerActionAdd, reducerActionDelete, reducerActionSet, TodoItem } from "../../../../helpers/interfaces";

export const setTodoAction = (payload: TodoItem[] | []): reducerActionSet => {
    return {
        type: actionsTypes.SET_TODOS,
        payload
    }
}

export const addTodoAction = (payload: TodoItem): reducerActionAdd => {
    return {
        type: actionsTypes.ADD_TODO,
        payload
    }
}

export const updateTodoAction = (payload: TodoItem): reducerActionAdd => {
    return {
        type: actionsTypes.UPDATE_TODO,
        payload
    }
}

export const deleteTodoAction = (payload: string): reducerActionDelete => {
    return {
        type: actionsTypes.DELETE_TODO,
        payload
    }
}