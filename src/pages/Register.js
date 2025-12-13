
import React, {useState} from 'react';
export default function Register(){
  const [form, setForm] = useState({username:'', email:'', firstName:'', lastName:'', phone:''});
  const [file, setFile] = useState(null);
  const onSubmit = async (e)=>{
    e.preventDefault();
    const fd = new FormData();
    fd.append('username', form.username);
    fd.append('email', form.email);
    fd.append('firstName', form.firstName);
    fd.append('lastName', form.lastName);
    fd.append('phone', form.phone);
    fd.append('document', file);
    const res = await fetch('/api/auth/register', {method:'POST', body: fd});
    const text = await res.text();
    alert(text);
  };
  return (
    <form onSubmit={onSubmit}>
      <div><label>Username</label><input onChange={e=>setForm({...form,username:e.target.value})} required/></div>
      <div><label>Email</label><input onChange={e=>setForm({...form,email:e.target.value})} required/></div>
      <div><label>First Name</label><input onChange={e=>setForm({...form,firstName:e.target.value})} required/></div>
      <div><label>Last Name</label><input onChange={e=>setForm({...form,lastName:e.target.value})} /></div>
      <div><label>Phone</label><input onChange={e=>setForm({...form,phone:e.target.value})} /></div>
      <div><label>Document</label><input type='file' onChange={e=>setFile(e.target.files[0])} required/></div>
      <button type='submit'>Register</button>
    </form>
  );
}
