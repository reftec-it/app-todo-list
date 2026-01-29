import React from 'react'
import TodoDataItem from '../ui/TodoDataItem';
import { sampleTodoListData } from '../Todo';

export default function Active(TodoData) {
  return (
    <div className='space-y-2'>
      {sampleTodoListData.map((todo, index) => (
        <div
          key={todo.id}
          style={{ animationDelay: `${index * 100}ms` }}
          className="opacity-0 animate-fadeIn"
        >
          {!todo.completed && <TodoDataItem data={todo} />}
        </div>
      ))}
    </div>
  )
}
