import React from 'react';

import { Context } from './helpers/context'
import {getTheme, setTheme  } from './helpers/theme'
import { TodoItem } from './helpers/types'

import AddTodoField from './components/AddTodoField'
import Header from './components/Header'
import Todos from './components/Todos';

const App: React.FC = (): React.ReactElement => {

  const [theme, toggleTheme] = React.useState<string>(getTheme());
  const [newTodo, addNewTodo] = React.useState<TodoItem | null>(null);

  React.useEffect(() => {
    setTheme(theme)
  }, [theme])

  return (
    <div className="container">
      <Context.Provider value={{
        theme,
        toggleTheme
      }}>
        <Header />
        <AddTodoField onAddTodo={addNewTodo}/>
        <Todos newTodo={newTodo} />
      </Context.Provider>
      
    </div>
  );
}

export default App;
