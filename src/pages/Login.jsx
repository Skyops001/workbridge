import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BriefcaseBusiness, Eye, EyeOff, ShieldCheck, UserPlus } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = React.useState({ email: "student@workbridge.com", password: "123456" });
  const [show, setShow] = React.useState(false);
  const [error, setError] = React.useState("");

  const submit = async e => {
    e.preventDefault(); setError("");
    try { const user = await login(form.email, form.password); navigate(user.role === "ADMIN" ? "/admin" : "/dashboard"); }
    catch (err) { setError(err.message); }
  };

  return <AuthPage title="Welcome back" subtitle="Sign in to continue to your WorkBridge account">
    <form onSubmit={submit} className="auth-form">
      {error && <div className="error-box">{error}</div>}
      <label>Email address<input type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="you@example.com" required /></label>
      <label>Password><div className="password-wrap"><input type={show ? "text" : "password"} value={form.password} onChange={e=>setForm({...form,password:e.target.value})} required/><button type="button" onClick={()=>setShow(!show)}>{show?<EyeOff size={18}/>:<Eye size={18}/>}</button></div></label>
      <div className="form-row"><label className="check"><input type="checkbox"/> Remember me</label><a href="#forgot">Forgot password?</a></div>
      <button className="primary-btn full">Sign in</button>
      <p className="auth-switch">Don't have an account? <Link to="/register">Create account</Link></p>
    </form>
    <div className="demo-box"><b>Demo accounts</b><span>Student: student@workbridge.com / 123456</span><span>Employer: employer@workbridge.com / 123456</span><span>Admin: admin@workbridge.com / 123456</span></div>
  </AuthPage>;
}

function AuthPage({ title, subtitle, children }) {
  return <div className="auth-page">
    <div className="auth-visual"><div className="auth-logo"><div className="brand-mark">W</div><b>WorkBridge</b></div><div className="visual-content"><span className="eyebrow">SMART WORK PLATFORM</span><h1>Connect talent with <em>opportunity.</em></h1><p>Discover temporary work, hire reliable talent, and manage everything from one secure platform.</p><div className="visual-points"><span><ShieldCheck/> Verified users & businesses</span><span><BriefcaseBusiness/> Flexible jobs & applications</span></div></div></div>
    <div className="auth-panel"><div className="auth-box"><div className="mobile-brand"><div className="brand-mark">W</div><b>WorkBridge</b></div><h2>{title}</h2><p className="auth-subtitle">{subtitle}</p>{children}</div></div>
  </div>;
}
