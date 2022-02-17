
import './App.css';
import React from 'react';
// import {connect} from 'react-redux';
import {useDispatch, useSelector} from "react-redux"
// import Test from './Test'
// import Test2 from './Test2'
// import { counterINC } from './actions';

import {add_todo} from './actions';
import {delete_todo} from './actions';
import {clear_todo} from './actions';




const App=({})=>{
  // console.log("props", props);
  const [value, setValue]=React.useState("");
//  const [todos, setTodos]=React.useState(state)

  const handlChanche=(e)=>{
    e.preventDefault();
    // console.log(e?.target.value)
    
    setValue(e?.target?.value)
  }
//reduc =x action


const state =useSelector(state=>state);
const dispatch=useDispatch()
// bula action chaqirip maluot storga yiborib qaytarib olish uchun


  const onSubmit=(e)=>{
    e.preventDefault();
    dispatch(add_todo(value))
      // const update=[...todos, value]
      // setTodos(update);
      // console.log("update", update)
      setValue("");
  }
  const handleDel=( id)=>{
    // e.preventDefault();
    dispatch(delete_todo(id));
    console.log("key", id)
  }
  return (
    <>
     <h1>Hello world!</h1>
     <input value={value} onChange={handlChanche}/>
     <button onClick={onSubmit}>Add todo</button>
     <div>
      
     </div>
     
     <ul>
       {state?.map((item, id)=>{
         return(
           <li key={item?.id}>{item?.value}<button onClick={()=>{handleDel(item.id)}}>Delete</button></li>
         )
       })}
     </ul>



    </>
   

  );
}








// const mapStateToProps=(state)=>{
//   console.log("state", state);
//   return {
//     GlobalState: state
//   }
// }











// export default connect(mapStateToProps)(App);
export default App;
