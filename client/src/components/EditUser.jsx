import React, { useState } from 'react'
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { editUser } from '../redux/actions';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


Modal.setAppElement('#root');

const EditUser = ({user}) => {
    const dispatch = useDispatch()
 const [modalIsOpen, setIsOpen] = React.useState(false);
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [phone, setPhone] = useState(user.phone)

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const handeleSubmit=(e)=>{
    e.preventDefault()
    dispatch(editUser(user._id,name,email,phone))
    closeModal()
  


  }
  return (
    <div>
         <button onClick={openModal}>Edit</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
           <form action="" onSubmit={handeleSubmit}>
        <input type="text"  value={name} onChange={(e)=>setName(e.target.value)}/>
        <label htmlFor="">name</label>
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <label htmlFor="">email</label>
        <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} />
        <label htmlFor="">phone</label>
         <button>Add</button> 
        
      </form>
      </Modal>
    </div>
  )
}

export default EditUser