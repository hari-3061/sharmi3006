
import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
function useQuery(){ return new URLSearchParams(useLocation().search); }
export default function Reset(){
  const q = useQuery();
  const username = q.get('username') || '';
  const [pw, setPw] = useState('');
  const onSubmit = async (e)=>{
    e.preventDefault();
    const res = await fetch('/api/auth/reset-password', {method:'POST', headers:{'Content-Type':'application/x-www-form-urlencoded'}, body: new URLSearchParams({username, newPassword: pw})});
    const text = await res.text();
    alert(text);
    if(text==='OK') window.location='/login';
  };
  return (
    <form onSubmit={onSubmit}>
      <div>Reset password for <b>{username}</b></div>
      <div><input type='password' value={pw} onChange={e=>setPw(e.target.value)} required/></div>
      <button type='submit'>Set New Password</button>
    </form>
  );
}
