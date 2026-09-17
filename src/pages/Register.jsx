import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const { register } = useAuth(); const navigate = useNavigate();
  const [form,setForm]=React.useState({name:"",email:"",password:"",role:"STUDENT"});
  const [error,setError]=React.useState("");
  const submit=async e=>{e.preventDefault();setError("");if(form.password.length<6){setError("Password must contain at least 6 characters.");return;}try{const u=await register(form);navigate(u.role==="ADMIN"?"/admin":"/dashboard")}catch(x){setError(x.message)}};
  return <div className="auth-page">
    <div className="auth-visual"><div className="auth-logo"><div className="brand-mark">W</div><b>WorkBridge</b></div><div className="visual-content"><span className="eyebrow">JOIN WORKBRIDGE</span><h1>Your next opportunity is <em>closer.</em></h1><p>Create an account as a student or employer and start using the platform.</p></div></div>
    <div className="auth-panel"><div className="auth-box"><div className="mobile-brand"><div className="brand-mark">W</div><b>WorkBridge</b></div><h2>Create account</h2><p className="auth-subtitle">Choose your role and get started</p>
      <form onSubmit={submit} className="auth-form">{error&&<div className="error-box">{error}</div>}
        <label>Full name<input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required placeholder="Your full name"/></label>
        <label>Email address<input type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required placeholder="you@example.com"/></label>
        <label>Password<input type="password" value={form.password} onChange={e=>setForm({...form,password:e.target.value})} required placeholder="Minimum 6 characters"/></label>
        <div className="role-picker"><button type="button" className={form.role==="STUDENT"?"selected":""} onClick={()=>setForm({...form,role:"STUDENT"})}>Student</button><button type="button" className={form.role==="EMPLOYER"?"selected":""} onClick={()=>setForm({...form,role:"EMPLOYER"})}>Employer</button></div>
        <button className="primary-btn full">Create account</button><p className="auth-switch">Already have an account? <Link to="/login">Sign in</Link></p>
      </form>
    </div></div>
  </div>;
}
