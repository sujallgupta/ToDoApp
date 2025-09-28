import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'
//   from
const TodoItems = ({text,id,isComplete,deleteTodo,toggle}) => {
  return (
// flex,items at center,margin y axis 3 ,gap 2
    <div className = 'flex items-center my-3 gap-2'>
        {/* flex,flex 1,items at center,cursor pointer */}
      <div onClick={()=>{toggle(id)}} className = 'flex flex-1 items-center cursor-pointer'>
{/* width =7 */}
        <img  src={isComplete ?tick : not_tick} alt="" className='w-7'/>
       {/* text color=700,margin left = 4,font size=17px,to highlight line through text added & decoration slate = 500*/}
        <p className={`tex-slate-700 ml-4 text-[17-px]  decoration-slate-500
            ${isComplete ? "line-through":""}`}>
             {text} </p>
      </div>
      {/*--------- delete icon--------  */}
      {/* width =3.5,cursor pointer */}
      <img onClick={() =>{deleteTodo(id)}} src={delete_icon} alt="" className ='w-3.5 cursor-pointer'/>
    </div>
  )
}

export default TodoItems
