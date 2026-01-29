import React, { useState } from 'react';
import Button from './ui/button';
import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons';

export default function TodoForm() {
  const handleClick = () => {
    alert('Hello World!');
  };

  return (
    <form>
      <section className='flex flex-col items-start justify-between gap-4'>
        <div className='w-full'>
          <textarea 
            placeholder='What is the task today?' 
            className='w-full rounded-lg p-4 text-white min-h-[60px] max-h-[100px] bg-[#4d4236] focus:bg-[#2b241d] focus:outline-none transition-colors' />
        </div>

        <div className='w-full flex items-start justify-end'>
          <Button
            fontIcon={faFileCirclePlus}
            text='Add Note'
            iconSize='md'
            clickEvent={handleClick}
            type='submit'
            context='primary'
          />
        </div>
      </section>
    </form>
  )
}
