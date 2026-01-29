import React from 'react';
import Button from '../ui/button';
import { faSquareFull } from '@fortawesome/free-regular-svg-icons';

export default function TodoDataItem({data}) {
    return (
        <div className='bg-orange-400 odd:bg-orange-500 w-full p-4 rounded-md shadow-md flex min-h-[80px]'>
            <div className='grow'>
                <p className='text-start text-wrap'>{data.title}</p>
            </div>

            <div className='min-w-[100px] flex items-start justify-end'>
                {!data.completed && <Button fontIcon={faSquareFull} iconSize='lg' title='Check todo' />}
            </div>
        </div>
    );
}