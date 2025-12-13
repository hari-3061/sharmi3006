
import React, {useEffect, useState} from 'react';
export default function Admin(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{ fetch('/api/admin/users').then(r=>r.json()).then(setUsers); },[]);
  const approve = async (id)=>{
    const res = await fetch('/api/admin/approve/'+id, {method:'POST', headers:{'Authorization':'Basic '+btoa('Admin:Admin@123')}});
    const text = await res.text();
    alert(text);
    setUsers(users.map(u=> u.id===id? {...u, enabled:true}: u));
  };
  return (
    <div>
      <h3>Admin Dashboard (use default Admin credentials)</h3>
      <table border='1'>
        <thead><tr><th>ID</th><th>Username</th><th>Email</th><th>Enabled</th><th>Document</th><th>Action</th></tr></thead>
        <tbody>
          {users.map(u=>(
            <tr key={u.id}><td>{u.id}</td><td>{u.username}</td><td>{u.email}</td><td>{String(u.enabled)}</td><td>{u.documentPath? <a href={u.documentPath}>doc</a>:'-'}</td>
            <td>{!u.enabled? <button onClick={()=>approve(u.id)}>Approve</button>: 'Approved'}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
