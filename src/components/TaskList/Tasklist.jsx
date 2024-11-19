import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'
import CompleteTask from './CompleteTask'

const Tasklist = ({data}) => {
  
  return (
    <>
    <div id="tasklist" className=' overflow-x-auto h-[55%] flex justify-start flex-nowrap gap-5 items-center w-full py-5 bg-red-600 mt-10'>
      {data.tasks.map((elem,idx)=>{
        if(elem.active){
          return <AcceptTask  key={idx} data={elem}/>
        }if(elem.newTask){
          return <NewTask  key={idx} data={elem}/>
        }if(elem.completed){
          return <CompleteTask  key={idx} data={elem}/>
        }if(elem.failed){
          return <FailedTask  key={idx} data={elem}/>
        }
        return null ;
      })}
      
    </div>
    
    
    </>
  )
}

export default Tasklist
