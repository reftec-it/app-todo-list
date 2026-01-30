import React from 'react';
import Button from './button';
import { faSquareFull } from '@fortawesome/free-regular-svg-icons';

export default function TodoCard({data}) {
    return (
        <div className='bg-orange-500 hover:bg-orange-600 w-full p-4 rounded-md shadow-md flex min-h-[80px] transition-colors'>
            <div className='grow'>
                <p className='text-start text-wrap cursor-default'>{data.title}</p>
            </div>

            <div className='min-w-[100px] flex items-start justify-end'>
                {!data.completed && <Button fontIcon={faSquareFull} iconSize='lg' title='Check todo' />}
            </div>
        </div>
    );
}