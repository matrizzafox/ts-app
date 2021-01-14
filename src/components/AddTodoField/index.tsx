import React, { ChangeEvent, FormEvent, SetStateAction } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { TodoItem } from '../../helpers/interfaces'

import './styles.css'

type AddTodoProps = {
    onAddTodo: React.Dispatch<SetStateAction<TodoItem | null>>
}

const AddTodoField: React.FC<AddTodoProps> = React.memo(({ onAddTodo }): React.ReactElement => {

    const [value, setValue] = React.useState<string>('')

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        onAddTodo({
            id: uuidv4(),
            title: value,
            completed: false
        })
        setValue('')
    }

    const handleChangeValue = (e: ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value)
    }

    return (
        <form className="add_todo" onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={handleChangeValue} placeholder="Введите TODO" required/>
            <button type="submit">Добавить</button>
        </form>
    )
})

export default AddTodoField
