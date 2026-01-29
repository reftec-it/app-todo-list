import React from 'react'
import TodoForm from './TodoForm';
import Tabs from './Tabs';

export default function TodoWrapper() {
  return (
    <section className='space-y-2 max-w-[400px]'>
      <div className='bg-[#584c3c] min-w-[400px] p-4 rounded-lg space-y-2 shadow-xl'>
        <h1 className="text-xl text-start font-medium text-white">
          Todo List
        </h1>
        <hr className='border-gray-200/25' />
        <TodoForm />
      </div>
      <div className='bg-[#584c3c] min-w-[400px] p-4 rounded-lg space-y-2 shadow-xl'>
        <Tabs/>
      </div>
    </section>

  )
}
