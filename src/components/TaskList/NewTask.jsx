import React from 'react'

const NewTask = ({data}) => {
  console.log(data)
  return (
    <div className='h-full flex-shrink-0 w-[300px] p-5 bg-red-500 rounded-xl'>
    <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>{data.category}</h3>
        <h4 className='text-sm'>{data.taskDate}</h4>
    </div>
    <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
    <p className='text-sm mt-2'>{data.taskDescription}</p>
    <div >
        <button className='bg-green-500 mt-5 py-1 px-2'>Accept New Task</button>
    </div>
</div>
  )
}

export default NewTask