
import React, {useState} from 'react';
export default function Login(){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit = async (e)=>{
    e.preventDefault();
    // perform basic fetch to protected endpoint using fetch with Authorization header (Basic)
    const token = btoa(username + ':' + password);
    const res = await fetch('/api/admin/users', {headers:{'Authorization':'Basic '+token}});
    if(res.status===200){
      alert('Login successful as admin (or protected route accessible)');
    } else if(res.status===401){
      alert('Unauthorized - check credentials or wait for approval');
    } else {
      // check if must reset
      const must = await (await fetch('/api/auth/must-reset/'+username)).text();
      if(must==='true') window.location='/reset?username='+encodeURIComponent(username);
      else alert('Login failed: ' + res.status);
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <div><label>Username</label><input value={username} onChange={e=>setUsername(e.target.value)} required/></div>
      <div><label>Password</label><input type='password' value={password} onChange={e=>setPassword(e.target.value)} required/></div>
      <button type='submit'>Login (Basic)</button>
    </form>
  );
}
