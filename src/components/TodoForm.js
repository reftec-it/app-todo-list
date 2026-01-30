import React, { useState } from 'react';
import Button from './ui/button';
import { faFileCirclePlus, faBrush } from '@fortawesome/free-solid-svg-icons';
import Todo from './Todo';

export default function TodoForm() {
  const [title, setTitle] = useState("");
  const [showClearButton, toggleClearVisibility] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    Todo.storage.addTodo(title);
    setTitle('');
  };

  return (
    <form
      onSubmit={handleSubmit}
    >
      <section className='flex flex-col items-start justify-between gap-4'>
        <div className='w-full relative'>
          <textarea
            name='title'
            value={title}
            autoFocus
            onChange={(e) => {
              setTitle(e.target.value);
              toggleClearVisibility(e.target.value.length > 0);
            }}
            onMouseLeave={(e) => {
              if (e.target.value.length <= 0) {
                toggleClearVisibility(false)
              }
            }}
            onFocus={() => toggleClearVisibility(title.length > 0)}
            required
            placeholder='What is the task today?'
            className='w-full rounded-lg p-4 text-white min-h-[60px] max-h-[100px] bg-[#4d4236] focus:bg-[#2b241d] focus:outline-none transition-colors' />
          {/* clear button */}
          <div
            title='Clear input'
            className={`${showClearButton ? 'opacity-100' : 'opacity-0 pointer-events-none'} absolute top-2 right-3 transition-all`}>
            <Button
              fontIcon={faBrush}
              iconSize='md'
              context='primary'
              title='Clear input'
              onClick={(e) => {
                setTitle('');
              }}
            />
          </div>
        </div>

        <div className='w-full flex items-start justify-end'>
          <Button
            fontIcon={faFileCirclePlus}
            text='Add ToDo'
            iconSize='md'
            type='submit'
            context='primary'
            className=''
          />
        </div>
      </section>
    </form>
  )
}
