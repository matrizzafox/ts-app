export type TodoItem = {
    id: string,
    title: string,
    completed: boolean
}

export enum actionsTypes  {
    SET_TODOS,
    ADD_TODO,
    UPDATE_TODO,
    DELETE_TODO
}

export type reducerState = {
    todos: TodoItem[] | []
}

export type reducerActionAdd = {
    type: actionsTypes.ADD_TODO | actionsTypes.UPDATE_TODO,
    payload: TodoItem
}

export type reducerActionSet = {
    type: actionsTypes.SET_TODOS,
    payload: TodoItem[] | []
}

export type reducerActionDelete = {
    type: actionsTypes.DELETE_TODO,
    payload: string
}

export type reducerActions = reducerActionAdd | reducerActionSet | reducerActionDelete