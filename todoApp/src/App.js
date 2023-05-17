import {useState} from 'react'
import './App.css'
export default function App(){
  let [todos,setTodos]=useState([])
  let [todo,setTodo]=useState('')
  let arr=[]
  let to1=[]
  return(
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>The To D⚾ list...........-<b style={{fontStyle:'oblique',color:"cyan"}}> रोषिन🙂 </b></h2>
      </div>
      <div className="input">
        <input value={todo} onChange={(e)=>setTodo(e.target.value)}type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setTodos([...todos,{id:Date.now(),activity:todo,status:false}])}className="fas fa-plus"></i>
      </div>
      <hr></hr>
      <div className="todos">
        <br/><b><p style={{color:'dark green',fontSize:'30px',fontStyle:'oblique'}}>Activities:</p></b>
        {
        todos.map((obj,index)=>{
        return(
        <div className="todo">
          <div className="left">
            <input type="checkbox" onChange={(e)=>{
              setTodo(todos.filter(obj1=>{
                if(obj1.id===obj.id)
                {
                  obj1.status=e.target.checked
                }
                return null
              }))
          
            }} 
            value={obj.status}
            name="" id="" />
            <p>{index+1}.{obj.activity}</p>
          </div>
          <div className="right">
            <i 
        className="fas fa-times"></i>
          </div>
        </div>
        )})
        }
        <br/>
        <p style={{color:"green", fontSize:'20px'}}>Completed Activities:</p>
        {
          
          todos.map((obj)=>
          {
           if(obj.status){
             return( <h3 style={{color:'blue'}}>{obj.activity}</h3>)
            }
            return null
          })
        }

      </div>
      {/*<p style={{color:"green", fontSize:'20px'}}>Removed Activities:</p>
      
          arr.map((obj)=>
          {

             return( <h3 style={{color:'Red'}}>{obj.activity}</h3>)
          })
        */}

    </div>
  )
}