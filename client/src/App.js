
import './App.css';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUser, deleteUser, getUser } from './redux/actions';
import EditUser from './components/EditUser';

function App() {
  const dispatch=useDispatch()
  const {users,loading}= useSelector(state=>state)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")


  useEffect(() => {
    dispatch(getUser())
     
     }, [])
     const handeleSubmit=(e)=>{
       e.preventDefault()
       const newUser={
         name,
         email,
         phone

       }
       dispatch(addUser(newUser))
       setName("")
       setEmail("")
       setPhone("")


     }
  return (

    <div className="App" >
      <form action="" onSubmit={handeleSubmit}>
        <input type="text"  value={name} onChange={(e)=>setName(e.target.value)}/>
        <label htmlFor="">name</label>
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <label htmlFor="">email</label>
        <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} />
        <label htmlFor="">phone</label>
         <button>Add</button> 
        
      </form>

      {
        loading? <h1>loading...</h1>
        :users.map(el=>
          <div key={el._id} style={{border:"1px solid black",marginTop:"2%"}}>
            <h2>{el.name}</h2>
            <h3>{el.email}</h3>
           <button onClick={()=>dispatch(deleteUser(el._id))}>delete</button>
           <EditUser user={el}/>
          </div>)
      }
     
      
      
    </div>
  );
}

export default App;
