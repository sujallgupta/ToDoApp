import React, { useRef,useState,useEffect } from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItems from './TodoItems'
const Todo = () => {
const[todoList,setTodoList]=useState(localStorage.getItem("todos")?JSON.parse
(localStorage.getItem("todos")):[]);

// input ref imported from use Ref
const inputRef = useRef();
// Function defined to get input value
const add = () =>{
const inputText= inputRef.current.value.trim();
if(inputText===""){
    return null;
}
const newTodo = {
    id: Date.now(),
    text: inputText,
    isComplete: false,
}
// will get prev todo items & add new todo
setTodoList((prev)=>[...prev,newTodo])
inputRef.current.value="";
}
// Function defined to delete todo
const deleteTodo = (id)=>{
    setTodoList((prevTodos)=>{
       return prevTodos.filter((todo)=>todo.id !==id)
    })
    }
// Checks if the todo is complete or not
const toggle= (id)=>{
    setTodoList((prevTodos)=>{
        return prevTodos.map((todo)=>{
            if(todo.id===id){
                return{...todo,isComplete: !todo.isComplete}
            }
           return todo;
        });
    });
}
// Local Storage
useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todoList))
},[todoList])

  return (
    // ---background color = white, placed at center,width= 11/12 (approx 90%),maximum width = medium,flex,flem coloum, padding (from all side),minimum height,rounded corner---//
    <div className = 'bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl' >
      
{/* ---------title---------- */}

{/* flex,items at center,margin from top 7, gap 2 */}
<div className = 'flex items-center mt-7 gap-2'>
{/* Width 8 */}
<img className="w-8" src={todo_icon} alt=""/>
{/* text size 3xl,font-semibold */}
<h1 className='text-3xl font-semibold '>To-do List</h1>
</div>

{/* ----------input Box--------- */}

{/* flex,items at center,margin y axis 7,background color =grey,rounded corner */}
<div className = 'flex item-center my-7 bg-gray-200 rounded-full'>
{/* background transparent,border 0, outliner none,flex -1, height 14,padding left =6,padding right =2, text slate-600*/}
<input ref= {inputRef}className = 'bg-transparent border-0 outlinner-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600 ' 
type="text" placeholder='Add Your Task' onKeyDown={(e)=>{
    if(e.key==="Enter"){
        add();
    }
}}/>
{/* border none, rounded full,background color= orange,width = 32,height=14,text color= white,font medium,corsor - pointer */}
<button onClick={add} className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer'>ADD +</button>
</div>
{/* --------To Do List----------- */}
<div>
    {/* maps the list  */}
{todoList.map((item,index)=>{
    return<TodoItems key={index} text={item.text} id={item.id}
     isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle}/>
})}



</div>

    </div>
  )
}

export default Todo
