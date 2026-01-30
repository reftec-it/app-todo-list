import React from 'react'
import Todo from '../Todo';
import TodoCard from '../ui/todoCard';

export default function Active(TodoData) {
  const activeTodos = Todo.storage.getAllActive();
  return (
    <div className='space-y-2'>
      {
        Object.values(activeTodos).map((todo, index) => (
          <TodoCard data={todo} />
        ))
      }
    </div>
  )
}

